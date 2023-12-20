package com.altima.api.echo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Env {

    @Value("${application.env}")
    private String mode;

    public Mode mode() {
        return Mode.valueOf(mode.toUpperCase());
    }

    public enum Mode {
        LOCAL,
        DEV,
        RCTPART,
        RCT1,
        RCT2,
        RCTCOR,
        PREPROD,
        PROD;

        public static Boolean isLocal(Mode env){
            return LOCAL.equals(env);
        }
    }
}
