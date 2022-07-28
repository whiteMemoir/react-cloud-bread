import axios from "axios";
import { createContext, useState } from "react";
import config from "../../config";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
	const [orders, setOrders] = useState([]);
	const getOrders = async (token) => {
		return await axios
			.get(`${config.api_host}/api/orders`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((res) => setOrders(res.data.data));
	};

	const createOrder = async (token, data) => {
		return await axios.post(`${config.api_host}/api/orders`, data, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	};

	const getInvoiceByOrderId = async (token, orderID) => {
		return await axios.get(`${config.api_host}/api/invoices/${orderID}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	};
	return (
		<OrderContext.Provider
			value={{ getOrders, createOrder, getInvoiceByOrderId, orders, setOrders }}
		>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
