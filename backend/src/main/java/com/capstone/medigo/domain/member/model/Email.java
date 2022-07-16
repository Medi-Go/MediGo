package com.capstone.medigo.domain.member.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.util.regex.Pattern;

import static lombok.AccessLevel.PROTECTED;

@Getter
@Embeddable
@NoArgsConstructor(access = PROTECTED)
public class Email {

    private static final String EMAIL_REGEX = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

    private String email;

    public Email(String email) {
        String lowerCasedEmail = email.toLowerCase();
        validateEmailPattern(lowerCasedEmail);
        this.email = lowerCasedEmail;
    }

    private void validateEmailPattern(String email) {
        boolean matches = Pattern.matches(EMAIL_REGEX, email);
        if (!matches) {
            throw new IllegalArgumentException("입력값이 이메일 형식에 맞지 않습니다.");
        }
    }

}