package iuh.fit.backend.service.impl;

import iuh.fit.backend.domain.UserRole;
import iuh.fit.backend.model.User;
import iuh.fit.backend.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

/**
 * @author TrungNguyen
 * @created 4/19/2026
 * @description
 */
public class CustomUserServiceImpl implements UserDetailsService {

    private UserRepository userRepository;
    private static final String SELLER_PREFIX ="seller_";
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.startsWith(SELLER_PREFIX)) {

        }
        else {
            User user = userRepository.findByEmail(username);
            if (user != null) {
                return buildUserDetails(user.getEmail(), user.getPassword(), user.getRole());
            }
        }
        throw new UsernameNotFoundException("User not found with email: " + username);
    }

    private UserDetails buildUserDetails(String email, String password, UserRole role) {
        if(role == null) role=UserRole.CUSTOMER;
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));

        return new org.springframework.security.core.userdetails.User(email, password, authorities);
    }
}
