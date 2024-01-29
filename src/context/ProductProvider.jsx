/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  return (
    <Cartcontext.Provider >
      {children}
    </Cartcontext.Provider>
  );
};
