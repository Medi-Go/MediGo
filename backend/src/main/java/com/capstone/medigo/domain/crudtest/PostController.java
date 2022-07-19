package com.capstone.medigo.domain.crudtest;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/test/post")
public class PostController {
    private final PostService postService;

    @GetMapping
    public ResponseEntity<List<Post>> getPost(){
        List<Post> all = postService.getAll();
        return ResponseEntity.ok(all);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPost(@PathVariable Long id){
        Post post = postService.get(id);
        return ResponseEntity.ok(post);
    }

    @PostMapping
    public ResponseEntity<Post> save(@RequestBody PostRequest post){
        Post postEntity = Post.builder()
            .postBody(post.postBody())
            .postTitle(post.postTitle())
            .build();
        Post save = postService.save(postEntity);
        System.out.println(save.getPostBody());
        System.out.println(save.getPostTitle());
        return ResponseEntity.ok(save);
    }

    @PutMapping
    public ResponseEntity<Post> update1(@RequestBody PostPutRequest post){
        Post update = postService.update(post);
        return ResponseEntity.ok(update);
    }

    @PatchMapping
    public ResponseEntity<Post> update2(@RequestBody PostPutRequest post){
        Post update = postService.update(post);
        return ResponseEntity.ok(update);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        postService.delete(id);
        return "success delete";
    }


}
