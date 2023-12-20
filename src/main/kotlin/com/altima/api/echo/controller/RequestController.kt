package com.altima.api.echo.controller

import com.altima.api.echo.dto.RequestResponse
import com.altima.api.echo.service.RequestService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = ["/api/requests"])
class RequestController(val requestService: RequestService) {

    @GetMapping(value = [""])
    fun get(): RequestResponse? = requestService.getAllReq()

}
