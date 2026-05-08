import React from "react";
import OrderItem from "./OrderItem";

const Order = () => {
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">Tất cả đơn hàng</h1>
        <p>Từ trước tới nay</p>
      </div>
      <div className="space-y-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <OrderItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;
