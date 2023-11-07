package ua.mibal.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.mibal.demo.model.Assignment;

/**
 * @author Mykhailo Balakhon
 * @link <a href="mailto:9mohapx9@gmail.com">email</a>
 */
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
