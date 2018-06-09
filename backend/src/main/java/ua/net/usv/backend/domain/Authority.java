package ua.net.usv.backend.domain;

import lombok.Data;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * An authority (a security role) used by Spring Security.
 */
@Entity
//@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Data
public class Authority implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(max = 50)
    @Id
    @Column(length = 50)
    private String name;
}