import { Outlet } from "react-router-dom";
import { HomeProvider } from "./HomeContext";

const HomeLayout = () => {
	return (
		<HomeProvider>
			<Outlet />
		</HomeProvider>
	);
};

export default HomeLayout;
