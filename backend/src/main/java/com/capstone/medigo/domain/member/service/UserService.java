package com.capstone.medigo.domain.member.service;

import com.capstone.medigo.domain.member.model.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> getUser(String username);
    List<User> getUsers();
}