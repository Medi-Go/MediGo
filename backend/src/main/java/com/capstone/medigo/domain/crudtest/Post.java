package com.capstone.medigo.domain.crudtest;

import static lombok.AccessLevel.PROTECTED;

import com.capstone.medigo.domain.mydata.model.MedicineInfo;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
@NoArgsConstructor(access = PROTECTED)
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "post_id")
    private Long id;

    @Column(name = "post_title")
    private String postTitle;

    @Column(name = "post_body")
    private String postBody;

    @Builder
    public Post(Long id, String postTitle, String postBody) {
        this.id = id;
        this.postTitle = postTitle;
        this.postBody = postBody;
    }
}
