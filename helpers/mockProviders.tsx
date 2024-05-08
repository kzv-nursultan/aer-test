import React, { ReactNode } from "react";
import StoreProvider from "../app/storeProvider";

export const mockTestProvider = (component: ReactNode) => {
  return <StoreProvider>{component}</StoreProvider>;
};
