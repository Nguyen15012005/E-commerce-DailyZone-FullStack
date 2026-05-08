import React from "react";

export const sellerRoutes = [
  {
    path: "/seller",
    element: <SellerLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <ProductList />,
      },
      {
        path: "orders",
        element: <OrderList />,
      },
      {
        path: "customers",
        element: <CustomerList />,
      },
      {
        path: "profile",
        element: <SellerProfile />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "discounts",
        element: <Discounts />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
];
