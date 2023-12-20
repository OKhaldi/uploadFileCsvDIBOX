package com.altima.api.echo.config

import com.altima.api.echo.config.security.AccessError
import com.altima.api.echo.extensions.logger
import com.altima.lib.tools.common.model.ErrorModel
import org.reactivecouchbase.json.JsValue
import org.reactivecouchbase.json.Json
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.http.ResponseEntity.status
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.context.request.ServletWebRequest
import org.springframework.web.context.request.WebRequest

//@ControllerAdvice
class ErrorAdvice {

    private val headers: HttpHeaders = HttpHeaders().also { it.contentType = MediaType.APPLICATION_JSON }

    //@ExceptionHandler(value = [AccessError::class])
    protected fun handleException(ex: AccessError, request: WebRequest): ResponseEntity<Any> {
        if (logger().isWarnEnabled) {
            logger().warn(
                "{} - Accès non autorisé. Scope manquant : {}",
                getRequestContext(request),
                ex.missingScope.toString()
            )
        }
        val responseBody: JsValue = Json.obj()
            .with(ErrorModel.FIELD_ERROR, HttpStatus.UNPROCESSABLE_ENTITY.reasonPhrase)
            .with(ErrorModel.FIELD_ERROR_DESC, "Accès non autorisé")
            .with(ErrorModel.FIELD_ERROR_DETAILS, ex.missingScope.toString())
        return status(HttpStatus.FORBIDDEN).headers(headers).body(responseBody.pretty())
    }

    private fun getRequestContext(request: WebRequest): String {
        val req = (request as ServletWebRequest).request
        val uri = req.requestURI
        val method = req.method
        return "[$uri] $method"
    }

}
