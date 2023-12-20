package com.altima.api.echo.config.security.roles

import com.altima.api.echo.extensions.logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import java.util.*

data class ApplicationRoleCollection(
    val roles: List<GlobalRole>
) {
    /*fun getGrantedAuthorities(groups: List<String>) = groups.flatMap(::getMappedRoles)
        .flatMap(GlobalRole::toGrantedAuthorities)

    private fun getMappedRoles(groupName: String) = roles.filter { groupName.contains(it.groupName) }*/
}

data class GlobalRole(
    val name: String,
    val groupName: String,
    val scopes: List<String>
) {
}

@Configuration
class RolesConfiguration(
    @Value("\${role.list}")
    val roles: String,
    val environment: Environment
) {
    /*@Bean
    fun roles(): ApplicationRoleCollection {
        val roleList = roles.split(",")
            .map { it.trim() }
            .map {
                GlobalRole(
                    it,
                    environment.getRequiredProperty("role.$it"),
                    mapScopes(environment.getRequiredProperty("role.$it.scopes"))
                )
            }

        logger().info("Role mapping configuration")
        roleList.forEach {
            logger().info("Role {} has scopes : {}", it.groupName, it.scopes)
        }

        return ApplicationRoleCollection(roles = roleList)
    }*/

    private fun mapScopes(scopeStr: String): List<String> {
        return when (scopeStr) {
            "" -> emptyList()
            "*" -> Scopes.Basic.values().map { it.label }
            else -> scopeStr.split(",").map { it.trim() }
        }
    }

    @Bean
    fun corsFilter(): CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = false
        config.allowedOrigins = listOf("http://localhost:5173")
        config.allowedHeaders = listOf("Origin", "Content-Type", "Accept", "Authorization")
        config.allowedMethods = listOf("GET", "POST", "PUT", "PATCH")
        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val configuration = CorsConfiguration()
        configuration.allowedOrigins = listOf("http://localhost:5173")
        configuration.allowedMethods = listOf("GET", "POST")
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", configuration)
        return source
    }
}
