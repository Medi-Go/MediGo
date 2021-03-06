package com.capstone.medigo.global;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "app.jwt")
@Component
@Getter
@Setter
public class JwtYamlRead {
    private String tokenSecret;
    private long tokenExpiry;
    private long refreshTokenExpiry;
}
