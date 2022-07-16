package com.capstone.medigo.domain.member.repository;

import com.capstone.medigo.domain.member.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
