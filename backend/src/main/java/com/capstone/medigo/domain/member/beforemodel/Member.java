package com.capstone.medigo.domain.member.beforemodel;

import com.capstone.medigo.domain.member.model.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.EnumType.STRING;
import static lombok.AccessLevel.PROTECTED;

@Getter
@Entity
@Table
@NoArgsConstructor(access = PROTECTED)
public class Member extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Embedded
    private Email email;

    @Embedded
    private PhoneNumber phoneNumber;

    @Enumerated(value = STRING)
    @Column(name = "gender", length = 10, nullable = false)
    private Gender gender;

    @Embedded
    private Jumin encryptedJumin;

    @Builder
    public Member(String name, Email email, PhoneNumber phoneNumber, Gender gender, Jumin encryptedJumin) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.encryptedJumin = encryptedJumin;
    }
}
