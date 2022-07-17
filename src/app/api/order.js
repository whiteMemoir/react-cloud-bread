import axios from "axios";
import { config } from "../../config";

export const createOrder = async (payload) => {
	const { token } = localStorage.getItem("auth")
		? JSON.parse(localStorage.getItem("auth"))
		: {};

	return await axios.post(`${config.api_host}/api/orders`, payload, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

export const getInvoiceByOrderId = async (order_id) => {
	let { token } = localStorage.getItem("auth")
		? JSON.parse(localStorage.getItem("auth"))
		: {};

	return await axios.get(`${config.api_host}/api/invoices/${order_id}`, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

export const getOrders = async () => {
	let { token } = localStorage.getItem("auth")
		? JSON.parse(localStorage.getItem("auth"))
		: {};

	return await axios.get(`${config.api_host}/orders?limit=`, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
