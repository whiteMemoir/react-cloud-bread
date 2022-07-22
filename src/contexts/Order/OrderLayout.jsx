import React from "react";
import { Outlet } from "react-router-dom";
import { OrderProvider } from "./OrderContext";

const OrderLayout = () => {
	return (
		<OrderProvider>
			<Outlet />
		</OrderProvider>
	);
};

export default OrderLayout;
