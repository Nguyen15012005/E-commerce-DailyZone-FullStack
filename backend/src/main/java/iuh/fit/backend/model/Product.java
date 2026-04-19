package iuh.fit.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
/**
 * @author TrungNguyen
 * @created 4/11/2026
 * @description
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String description;

    private int mrpPrice;

    private int sellingPrice;

    private int discountPercent;

    private int quantity;

    private String color;

    @ElementCollection  //khi có 1 list danh sách mà không cần tạo entity thì dùng cái nay => nó sẽ tạo ra một bảng phụ để lưu
    private List<String> images = new ArrayList<>();

    private int numRatings;

    @ManyToOne
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    private Seller seller;

    private LocalDateTime createdAt;

    private String sizes;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

}
