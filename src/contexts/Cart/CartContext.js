import axios from "axios";
import { createContext } from "react";
import config from "../../config";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const saveCart = async (token, cart) => {
		return await axios(
			`${config.api_host}/api/carts`,
			{ item: cart },
			{
				headers: {
					authorization: `Bearer ${token}`,
				},
			}
		);
	};
	return (
		<CartContext.Provider value={{ saveCart }}>{children}</CartContext.Provider>
	);
};

export default CartContext;
