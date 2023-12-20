package com.altima.api.echo.dto

import java.util.UUID

data class RequestResponse(
    val uuid: UUID,
    val verb: String,
    val path: String,
    val host: String?,
    val appName: String,
    val status: Int?,
    val queryString: String?
)
