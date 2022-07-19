package com.capstone.medigo.domain.crudtest;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public Post save(Post post){
        return postRepository.save(post);
    }

    public Post update(PostPutRequest post){
        Post post1 = postRepository.findById(post.id()).get();
        post1.setPostBody(post.postBody());
        return postRepository.save(post1);
    }

    public Post get(Long id){
        return postRepository.findById(id).get();
    }

    public List<Post> getAll(){
        return postRepository.findAll();
    }

    public void delete(Long id){
        postRepository.deleteById(id);
    }
}
