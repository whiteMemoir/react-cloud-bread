import { Outlet } from "react-router-dom";
import { AddressProvider } from "./AddressContext";

const AddressLayout = () => {
	return (
		<AddressProvider>
			<Outlet />
		</AddressProvider>
	);
};

export default AddressLayout;
