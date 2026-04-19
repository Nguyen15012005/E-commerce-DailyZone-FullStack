import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <section className="max_padd_container pt-32">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start">
            <th className="p-1 py-2">Sản phẩm</th>
            <th className="p-1 py-2">Tiêu đề</th>
            <th className="p-1 py-2">Giá</th>
            <th className="p-1 py-2">Số lượng</th>
            <th className="p-1 py-2">Tổng cộng</th>
            <th className="p-1 py-2">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  key={e.id}
                  className="border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center"
                >
                  <td className="flexCenter">
                    <img
                      src={e.image}
                      alt=""
                      height={43}
                      width={43}
                      className="rounded-lg ring-1 ring-slate-900/5 my-1"
                    />
                  </td>
                  <td>
                    <div className="line-clamp-3">{e.name}</div>
                  </td>
                  <td>{e.new_price} VND</td>
                  <td className="w-16 h-16 bg-white">{cartItems[e.id]}</td>
                  <td>{e.new_price * cartItems[e.id]} VND</td>
                  <td>
                    <div className="bold-22 pl-14 cursor-pointer">
                      <TbTrash onClick={() => removeFromCart(e.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      {/* Cart details  */}
      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]">
        <div className="flex flex-col gap-10">  
          <h4 className="bold-20">Hóa đơn</h4>
          <div className="">
            <div className="flexBetween py-4">
              <h4 className="medium-16">Tổng phụ:</h4>
              <h4 className="text-gray-30 font-semibold">
                {getTotalCartAmount()} VND
              </h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Tiền ship</h4>
              <h4 className="text-gray-30 font-semibold">Miễn phí</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="bold-18">Tổng cộng</h4>
              <h4 className="bold-18">{getTotalCartAmount()} VND</h4>
            </div>
          </div>
          <button className="btn_dark_rounded w-44">Thanh toán</button>
          <div className="flex flex-col gap-10">
            <h4 className="bold-20 capitalize">Nhập mã giảm giá tại đây:</h4>
            <div className="flexBetween pl-15 h-12 bg-primary rounded-full ring-1 ring-slate-900/10">
              <input
                type="text"
                placeholder="Mã giảm giá"
                className="bg-transparent border-none outline-none ml-10"
              />
              <button className="btn_dark_rounded">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
