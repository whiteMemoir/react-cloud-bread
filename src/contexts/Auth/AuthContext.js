import { createContext, useState } from "react";
import axios from "axios";
import config from "../../config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isHome, setIsHome] = useState(false);

	const me = async (token) => {
		return await axios
			.get(`${config.api_host}/auth/me`, {
				headers: { authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setUser(res.data);
				if (res.data.error === 1) {
					localStorage.removeItem("token");
				}
			});
	};
	const registerUser = async (data) => {
		return await axios.post(`${config.api_host}/auth/register`, data);
	};
	const loginUser = async (data) => {
		return await axios.post(`${config.api_host}/auth/login`, data);
		// .then((res) => res);
		// .then((res) => {
		// 	localStorage.setItem("token", res.data.token);
		// 	setUser(res.data);
		// 	if (res.data.error === 1) {
		// 		localStorage.removeItem("token");
		// 	}
		// });
	};
	const logoutUser = async (token) => {
		return await axios.post(`${config.api_host}/auth/logout`, null, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	};

	return (
		<AuthContext.Provider
			value={{
				registerUser,
				loginUser,
				logoutUser,
				isHome,
				setIsHome,
				me,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthContext;
