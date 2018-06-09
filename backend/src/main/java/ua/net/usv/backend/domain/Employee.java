package ua.net.usv.backend.domain;

import javax.persistence.*;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
public class Employee {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long id;

    @Column(name = "hire_date")
    private LocalDate hireDate;

    @Column(name = "quit_date")
    private LocalDate quitDate;

    @Column
    private BigDecimal salary;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "job_id")
    private Job job;
}
