import { useContext, useEffect, useState } from "react";
import AccountTabs from "../components/Account/AccountTabs";
import Filler from "../components/Filler";
import FooterBottom from "../components/FooterBottom";

import Navbar from "../components/Navbar";
import AuthContext from "../contexts/Auth/AuthContext";
import NotFound from "./NotFound";

const Account = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const { me, user } = useContext(AuthContext);
	useEffect(() => {
		if (token !== null) {
			me(token);
		}
	}, [token]);
	return (
		<>
			{user ? (
				<>
					<header>
						<Navbar home={false} />
					</header>
					<Filler />
					<main className="sm:flex sm:flex-wrap bg-zinc-100 min-h-full justify-center">
						<AccountTabs />
					</main>
					<footer className="bg-white h-12">
						<FooterBottom />
					</footer>
				</>
			) : (
				<NotFound />
			)}
		</>
	);
};

export default Account;
