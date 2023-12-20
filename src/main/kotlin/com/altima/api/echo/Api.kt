package com.altima.api.echo

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean


@SpringBootApplication
class ApplicationConfig

fun main(args: Array<String>) {
    SpringApplication.run(ApplicationConfig::class.java, *args)
}





