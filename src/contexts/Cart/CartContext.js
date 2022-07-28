import axios from "axios";
import { createContext, useState } from "react";
import config from "../../config";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [carts, setCarts] = useState([]);
	const [productCount, setProductCount] = useState(0);
	const getCarts = async (token) => {
		return await axios
			.get(`${config.api_host}/api/carts`, {
				headers: { authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setCarts(res.data);
				setProductCount(res.data.length);
			});
	};

	const saveCart = async (token, carts) => {
		return await axios.put(
			`${config.api_host}/api/carts`,
			{ items: carts },
			{
				headers: {
					authorization: `Bearer ${token}`,
				},
			}
		);
	};
	return (
		<CartContext.Provider
			value={{
				saveCart,
				getCarts,
				carts,
				productCount,
				setProductCount,
				setCarts,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
