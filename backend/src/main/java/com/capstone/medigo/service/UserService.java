package com.capstone.medigo.service;

import com.capstone.medigo.domain.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> getUser(String username);
    List<User> getUsers();
}