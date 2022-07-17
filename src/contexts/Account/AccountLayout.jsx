import { Outlet } from "react-router-dom";
import { AccountProvider } from "./AccountContext";

const AccountLayout = () => {
	return (
		<AccountProvider>
			<Outlet />
		</AccountProvider>
	);
};

export default AccountLayout;
