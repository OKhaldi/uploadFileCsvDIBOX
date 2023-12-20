package com.altima.api.echo.kafka.entities

import com.fasterxml.jackson.databind.JsonNode
import java.util.*

data class RecorderHttpMessage(
    var id: UUID,
    var applicationName: String,
    val messageType: String,
    var verb: String,
    var host: String?,
    var path: String,
    var headers: JsonNode,
    var body: String?,
    val parts: JsonNode?,
    var status: Int?,
    var queryString: String?
)
