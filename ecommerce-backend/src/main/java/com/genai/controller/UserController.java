package com.genai.controller;

import com.genai.model.User;
import com.genai.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    

	// get all users
	@GetMapping("/users")
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

    @PostMapping("/users")
    public User registerUser(@RequestBody User user) {
        // Perform validation and business logic if needed
        return userRepository.save(user);
    }
}
