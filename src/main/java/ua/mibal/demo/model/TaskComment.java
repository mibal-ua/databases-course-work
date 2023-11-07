package ua.mibal.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

/**
 * @author Mykhailo Balakhon
 * @link <a href="mailto:9mohapx9@gmail.com">email</a>
 */
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Task_comment")
public class TaskComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subject", nullable = false)
    private String subject;

    @Column(name = "text", nullable = false)
    private String text;

    @Column(name = "dateTime")
    private LocalDateTime localDateTime;

    @Column(name = "Author_id", nullable = false)
    private Long authorId;

    @Column(name = "Task_id", nullable = false)
    private Long taskId;
}
