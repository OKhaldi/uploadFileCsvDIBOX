package com.altima.api.echo.config.security.roles

sealed interface Scopes {

    enum class Basic(val label: String) : Scopes {
        ;

        override fun toString() = label

        companion object {
            private val invertedMap = values().associateBy { it.label }
            fun getScope(scope: String) = invertedMap[scope]
        }
    }
}
