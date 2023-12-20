package com.altima.api.echo.config

import com.altima.api.echo.extensions.logger
import com.altima.lib.bootable.filters.IgnoreRequestFilter
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.MediaType
import org.springframework.web.client.RestTemplate
import org.springframework.web.filter.OncePerRequestFilter
import java.net.URI

private val nonClientRoutes = arrayOf(
    "/api/**",
    "/actuator/**",
    "/swagger.html",
    "/redoc.html",
    "/rapidoc.html",
    "/openapi/api.yaml",
    "/v3/api-docs/**",
    "/swagger-ui/**"
)

//@Configuration
class Routing {

    /*@Value("\${application.client.location:#{null}}")
    val clientLocation: String? = null

    @ConditionalOnProperty(name = ["application.client.hot-reload"], havingValue = "true")
    @Bean
    fun routeToDynamicClient(): IgnoreRequestFilter<DynamicClientRouting> {
        val location =
            requireNotNull(clientLocation) { "client location is required : set application.client.location" }

        return IgnoreRequestFilter(DynamicClientRouting(location))
            .ignoreAntPaths(*nonClientRoutes)
    }

    @ConditionalOnProperty(name = ["application.client.hot-reload"], havingValue = "false", matchIfMissing = true)
    @Bean
    fun routePagesToClientSPA(): IgnoreRequestFilter<ClientSPAFilter> {
        return IgnoreRequestFilter(ClientSPAFilter())
            .ignoreAntPaths(*nonClientRoutes.plus("/**/*.*"))
    }*/

}

class ClientSPAFilter : OncePerRequestFilter() {
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val resource = ClassPathResource("static/index.html")
        resource.inputStream.copyTo(response.outputStream)
        response.contentType = MediaType.TEXT_HTML_VALUE
    }
}

/*class DynamicClientRouting(private val clientUrl: String) : OncePerRequestFilter() {
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val restTemplate = RestTemplate()
        val headers = HttpHeaders()
        request.headerNames.asSequence()
            .forEach { headerKey ->
                headers[headerKey] = request.getHeaders(headerKey).toList()
            }
        val body = request.inputStream.readBytes()
        val payload = HttpEntity(body, headers)

        logger().trace("Forwarding to client : {} {}{}", request.method, clientUrl, request.requestURI)

        val resp = restTemplate.exchange(
            URI("${clientUrl}${request.requestURI}"),
            HttpMethod.valueOf(request.method),
            payload,
            ByteArray::class.java
        )
        response.status = resp.statusCode.value()

        resp.headers.filter { it.key != "Transfer-Encoding" }.forEach { (key, value) ->
            value.firstOrNull()?.let { response.addHeader(key, it) }
        }

        response.outputStream.write(resp.body ?: ByteArray(0))
    }
}*/

