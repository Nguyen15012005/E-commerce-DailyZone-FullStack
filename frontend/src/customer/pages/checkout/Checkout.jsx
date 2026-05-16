import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import AddressForm from "./AddresssForm";
import AddressCard from "./AddressCard";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // 👈 full gần màn hình
  maxWidth: "900px", // 👈 giới hạn đẹp
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2, // 👈 giảm padding để form rộng hơn
  borderRadius: "16px",
};
const paymentGatwayList = [
  {
    value: "COD",
    image: "https://cdn-icons-png.flaticon.com/512/2331/2331940.png",
    label: "Thanh toán khi nhận hàng",
  },
  {
    value: "MOMO",
    image:
      "https://developers.momo.vn/v3/assets/images/MOMO-Logo-App-6262c3743a290ef02396a24ea2b66c35.png",
    label: "Ví MoMo",
  },
  {
    value: "ZALOPAY",
    image:
      "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay.png",
    label: "ZaloPay",
  },
  {
    value: "VNPAY",
    image:
      "https://vnpay.vn/s1/statics.vnpay.vn/2023/9/06ncktiwd6dc1694418196384.png",
    label: "VNPay",
  },
];

// mock UI
const mockAddresses = [1, 2, 3];

const Checkout = () => {
  const [value, setValue] = useState(0);
  const [paymentGateway, setPaymentGateway] = useState(
    paymentGatwayList[0].value,
  );
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleCreateOrder = () => {
    navigate("/payment");
  };

  const handlePaymentChange = (event) => {
    setPaymentGateway(event.target.value);
  };

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20 lg:px-20 min-h-screen ">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9 bg-gray-50 p-10 rounded-lg">
        {/* LEFT */}
        <div className="col-span-2 space-y-5">
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl text-gray-700">
              Chọn địa chỉ giao hàng
            </span>

            <Button
              onClick={() => setOpen(true)}
              variant="outlined"
              sx={{
                borderRadius: "10px",
                textTransform: "none",
              }}
            >
              Thêm địa chỉ
            </Button>
          </div>

          {/* Address list */}
          <div className="text-sm font-medium space-y-4">
            <p className="text-gray-600">Địa chỉ đã lưu</p>

            <div className="space-y-3 border border-gray-300 rounded-xl p-4">
              {mockAddresses.map((_, index) => (
                <AddressCard
                  key={index}
                  selectedValue={value}
                  value={index}
                  handleChange={handleChange}
                />
              ))}
            </div>
          </div>

          {/* Add address */}
          <div className="py-4 px-5 rounded-xl border border-dashed bg-white hover:bg-gray-50 transition">
            <Button
              onClick={() => setOpen(true)}
              startIcon={<AddIcon />}
              sx={{ textTransform: "none" }}
            >
              Thêm địa chỉ mới
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-1 text-sm space-y-4">
          {/* Payment */}
          <section className="space-y-3 border p-5 rounded-xl bg-white shadow-sm">
            <h1 className="font-semibold text-center text-gray-700 text-lg">
              Chọn phương thức thanh toán
            </h1>

            <RadioGroup
              name="payment"
              className="space-y-3"
              onChange={handlePaymentChange}
              value={paymentGateway}
            >
              {paymentGatwayList.map((item) => (
                <label
                  key={item.value}
                  className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer transition-all
                  ${
                    paymentGateway === item.value
                      ? "border-2 bg-gray-200 shadow"
                      : "hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Radio value={item.value} />

                    <img
                      className="w-10 h-10 object-contain"
                      src={item.image}
                      alt={item.label}
                    />

                    <span className="font-medium">{item.label}</span>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </section>

          {/* Pricing */}
          <section className="border rounded-xl bg-white shadow-sm">
            {/* <PricingCard /> */}

            <div className="p-5">
              <Button
                onClick={handleCreateOrder}
                sx={{
                  py: "12px",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
                variant="contained"
                fullWidth
              >
                Đặt hàng
              </Button>
            </div>
          </section>
        </div>
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <AddressForm handleClose={() => setOpen(false)} />
        </Box>
      </Modal>
    </div>
  );
};

export default Checkout;
