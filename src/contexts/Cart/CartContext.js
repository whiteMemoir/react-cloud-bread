import axios from "axios";
import { createContext, useState } from "react";
import config from "../../config";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [carts, setCarts] = useState([]);
	const [qtyProductCount, setQtyProductCount] = useState(0);
	const [productCount, setProductCount] = useState(0);
	const getCarts = async (token) => {
		return await axios
			.get(`${config.api_host}/api/carts`, {
				headers: { authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setCarts(res.data);
				setProductCount(res.data.length);
				setQtyProductCount(
					res.data
						.map((cart) => cart.qty)
						.reduce((prev, curr) => prev + curr, 0)
				);
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
				qtyProductCount,
				setCarts,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
