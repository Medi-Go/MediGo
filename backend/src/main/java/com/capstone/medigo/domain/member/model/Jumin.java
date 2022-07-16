package com.capstone.medigo.domain.member.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@Getter
@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Jumin {
    private String jumin;

    public Jumin(String jumin) {
        this.jumin = jumin;
    }
}
