package com.altima.api.echo.config

import com.altima.lib.bootable.json.AltimaJacksonConfigurationBuilder
import com.altima.lib.bootable.json.JsonBooleanDeserializer
import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder

@Configuration
class JacksonConfiguration {

    @Autowired
    fun customObjectMapperBuilder(mapper: ObjectMapper): Jackson2ObjectMapperBuilder {
        val builder = AltimaJacksonConfigurationBuilder.builder()
            .withDeserializer(JsonBooleanDeserializer())
            .build()
            .modules(JavaTimeModule())
            .featuresToDisable(DeserializationFeature.READ_UNKNOWN_ENUM_VALUES_AS_NULL)

        // Update default mapper with this custom one
        builder.configure(mapper)

        return builder
    }
}
