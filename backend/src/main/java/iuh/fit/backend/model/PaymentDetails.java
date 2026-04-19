package iuh.fit.backend.model;

import iuh.fit.backend.domain.PaymentStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author TrungNguyen
 * @created 4/11/2026
 * @description
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetails {

    private String paymentId;

    private String razorpayPaymentLinkId;

    private String razorpayPaymentLinkReferenceId;

    private String razorpayPaymentLinkStatus;

    private String razorpayPaymentId;

    @Enumerated(EnumType.STRING)
    private PaymentStatus status;
}
