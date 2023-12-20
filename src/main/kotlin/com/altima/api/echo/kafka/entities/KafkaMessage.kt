package com.altima.api.echo.kafka.entities

import java.util.*

data class KafkaMessage(
    var uuid: UUID,
    var type: String,
    var timestamp: String,
    val version: String,
    val payload: RecorderHttpMessage
)
