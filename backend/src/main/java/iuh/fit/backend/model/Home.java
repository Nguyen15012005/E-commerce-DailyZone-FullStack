package iuh.fit.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author TrungNguyen
 * @created 4/11/2026
 * @description
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Home {

    private List<HomeCategory> grid;

    private List<HomeCategory> shopByCategories;

    private List<HomeCategory> electricCategories;

    private List<HomeCategory> dealCategories;

    private List<Deal> deal;
}
