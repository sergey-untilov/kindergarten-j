package ua.net.usv.backend.domain;

import javax.persistence.*;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "kdg_employee")
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

    @ManyToOne(
            optional=false,
            fetch=FetchType.EAGER,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH}
            )
    @JoinColumn(name = "job_id", nullable=false, updatable=true)
    private Job job;

    @ManyToOne(
            optional=false,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH}
            )
    @JoinColumn(name = "user_id", nullable=false, updatable=true)
    private User user;

}
