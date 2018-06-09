package ua.net.usv.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.net.usv.backend.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUserName(String userName);
}
