import { Outlet } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

const AuthLayout = () => {
	return (
		<AuthProvider>
			<Outlet />
		</AuthProvider>
	);
};

export default AuthLayout;
