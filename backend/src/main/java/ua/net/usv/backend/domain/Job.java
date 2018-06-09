package ua.net.usv.backend.domain;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
public class Job {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long id;

    @Column
    private String title;

    @Column
    private BigDecimal minSalary;

    @Column
    private BigDecimal maxSalary;

}
