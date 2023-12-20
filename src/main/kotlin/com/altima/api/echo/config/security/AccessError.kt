package com.altima.api.echo.config.security

import com.altima.api.echo.config.security.roles.Scopes

class AccessError(val missingScope: Scopes) : RuntimeException("Missing scope are required $missingScope")
