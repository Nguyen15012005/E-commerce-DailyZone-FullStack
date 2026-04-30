package iuh.fit.backend.model;

import jakarta.persistence.*;
import lombok.*;

/**
 * @author TrungNguyen
 * @created 4/11/2026
 * @description
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class VerificationCode {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String otp;

    private String email;

    @OneToOne
    private User user;

    @OneToOne
    private Seller seller;

}
