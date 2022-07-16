package com.capstone.medigo.domain.fetchmydata;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MyDataYamlReadTest {
    @Autowired
    MyDataYamlRead myDataYamlRead;

    @Test
    void test () {
        System.out.println(myDataYamlRead.getAes256Key());
        System.out.println(myDataYamlRead.getMyDataToken());
        System.out.println(myDataYamlRead.getTestJumin());
        System.out.println(myDataYamlRead.getTestName());
        System.out.println(myDataYamlRead.getTestPhone());
        System.out.println(myDataYamlRead.getAes256Alg());
        System.out.println(myDataYamlRead.getAes256Iv());
    }
}