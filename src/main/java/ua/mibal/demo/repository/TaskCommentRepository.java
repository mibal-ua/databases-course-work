package ua.mibal.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.mibal.demo.model.TaskComment;

/**
 * @author Mykhailo Balakhon
 * @link <a href="mailto:9mohapx9@gmail.com">email</a>
 */
public interface TaskCommentRepository extends JpaRepository<TaskComment, Long> {
}
