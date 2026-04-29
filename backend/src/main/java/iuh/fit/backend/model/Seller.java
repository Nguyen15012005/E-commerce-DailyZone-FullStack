package iuh.fit.backend.model;

import iuh.fit.backend.domain.AccountStatus;
import iuh.fit.backend.domain.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * @author TrungNguyen
 * @created 4/11/2026
 * @description
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String sellerName;

    private String phone;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    @Embedded //trong JPA dùng để nhúng (embed) một object vào entity mà KHÔNG tạo bảng riêng.
    private BusinessDetails businessDetails = new BusinessDetails();

    @Embedded //trong JPA dùng để nhúng (embed) một object vào entity mà KHÔNG tạo bảng riêng.
    private BankDetails bankDetails = new BankDetails();

    @OneToOne(cascade = CascadeType.ALL) //một seller có một địa chỉ, khi xóa seller thì xóa luôn địa chỉ
    private Address pickupAddress;

    private String GSTIN;

    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.SELLER;

    private boolean isEmailVerified = false;

    @Enumerated(EnumType.STRING)
    private AccountStatus accountStatus = AccountStatus.PENDING_VERIFICATION;

    @OneToMany(mappedBy = "seller")
    private List<Product> products = new ArrayList<>();

}
