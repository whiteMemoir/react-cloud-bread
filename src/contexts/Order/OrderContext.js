import axios from "axios";
import { createContext } from "react";
import config from "../../config";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
	const getOrders = async (token) => {
		return await axios(`${config.api_host}/api/orders`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	};

	const createOrder = async (token, data) => {
		return await axios(`${config.api_host}/api/orders`, data, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	};

	const getInvoiceByOrderId = async (token, orderID) => {
		return await axios(`${config.api_host}/api/invoices/${orderID}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	};
	return (
		<OrderContext.Provider
			value={{ getOrders, createOrder, getInvoiceByOrderId }}
		>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
