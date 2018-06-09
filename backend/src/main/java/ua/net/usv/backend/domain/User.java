package ua.net.usv.backend.domain;

import javax.persistence.*;

import lombok.*;

@Entity(name = "users")
@Data
public class User {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_name")
    private String userName;

    @Column
    private String password;
}
