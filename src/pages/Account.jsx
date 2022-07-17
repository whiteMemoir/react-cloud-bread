import AccountTabs from "../components/Account/AccountTabs";
import Filler from "../components/Filler";
import FooterBottom from "../components/FooterBottom";

import Navbar from "../components/Navbar";

const Account = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<Filler />
			<main className="sm:flex sm:flex-wrap bg-zinc-100 min-h-full justify-center">
				<AccountTabs />
			</main>
			<footer className="bg-white h-12">
				<FooterBottom />
			</footer>
		</>
	);
};

export default Account;
