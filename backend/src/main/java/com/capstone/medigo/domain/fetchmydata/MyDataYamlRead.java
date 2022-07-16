package com.capstone.medigo.domain.fetchmydata;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "app.mydata")
@Component
@Getter
@Setter
public class MyDataYamlRead {
    private String aes256Key;
    private String aes256Iv;
    private String aes256Alg;
    private String myDataToken;
    private String testJumin;
    private String testPhone;
    private String testName;
}

