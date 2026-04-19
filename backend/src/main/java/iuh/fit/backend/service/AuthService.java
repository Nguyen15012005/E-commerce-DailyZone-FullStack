package iuh.fit.backend.service;

import iuh.fit.backend.response.SignupRequest;

/**
 * @author TrungNguyen
 * @created 4/15/2026
 * @description
 */
public interface AuthService {
    String createUser(SignupRequest req);
}
