import { createContext } from "react";
import axios from "axios";
import config from "../config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const registerUser = async (data) => {
		return await axios.post(`${config.api_host}/auth/register`, data);
	};
	const loginUser = async (data) => {
		return await axios.post(`${config.api_host}/auth/login`, data);
	};
	const logoutUser = async (data) => {
		let { token } = localStorage.getItem("auth")
			? JSON.oarse(localStorage.getItem("auth"))
			: {};
		return await axios
			.post(`${config.api_host}/auth/logout`, null, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				localStorage.removeItem("auth");
				return res;
			});
	};

	// const me = async;

	return (
		<AuthContext.Provider value={{ registerUser, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthContext;
