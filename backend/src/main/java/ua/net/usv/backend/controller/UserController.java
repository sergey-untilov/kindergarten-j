package ua.net.usv.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.net.usv.backend.domain.User;
import ua.net.usv.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody User user) throws Exception {
        if (user.getId() != null)
            throw new Exception("A new user cannot already have an ID");
        else if (userRepository.findByLogin(user.getLogin().toLowerCase()).isPresent())
            throw new Exception("Login already used");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}