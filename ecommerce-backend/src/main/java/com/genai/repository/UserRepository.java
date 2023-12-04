package com.genai.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.genai.model.*;

public interface UserRepository extends JpaRepository<User, Long> {

}
