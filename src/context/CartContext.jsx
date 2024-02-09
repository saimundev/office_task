import React, { createContext, useEffect, useReducer, useState } from "react";
import cartReducer from "./cartReducer";

export const CreateCartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    cartItem: [],
  });

  return (
    <CreateCartContext.Provider
      value={{ shoppingCart: cart, dispatch: dispatch }}
    >
      {children}
    </CreateCartContext.Provider>
  );
};
