import React from "react";
import { useRoutes } from "react-router-dom";

import { customerRoutes } from "./customerRoutes";
import { sellerRoutes } from "./sellerRoutes";

const AppRoutes = () => {
  const routing = useRoutes([...customerRoutes, ...sellerRoutes]);

  return routing;
};

export default AppRoutes;
