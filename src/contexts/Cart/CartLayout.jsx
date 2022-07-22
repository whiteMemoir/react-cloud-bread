import React from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./CartContext";

const CartLayout = () => {
	return <CartProvider>
        <Outlet/>
    </CartProvider>;
};

export default CartLayout;
