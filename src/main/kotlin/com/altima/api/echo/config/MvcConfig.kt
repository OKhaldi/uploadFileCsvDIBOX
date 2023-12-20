package com.altima.api.echo.config

import org.springframework.context.annotation.Configuration
import org.springframework.http.CacheControl
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import java.util.concurrent.TimeUnit

//@Configuration
class MvcConfig : WebMvcConfigurer {
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/static/css/**")
            .addResourceLocations("classpath:/static/static/css/")
            .setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS))
        registry.addResourceHandler("/static/js/**")
            .addResourceLocations("classpath:/static/static/js/")
            .setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS))
    }
}
