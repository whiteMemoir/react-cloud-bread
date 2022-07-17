import CheckoutAddress from "../components/Checkout/CheckoutAddress";
import CheckoutConfirm from "../components/Checkout/CheckoutConfirm";
import Filler from "../components/Filler";
import FooterBottom from "../components/FooterBottom";
import Navbar from "../components/Navbar";

const Checkout = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<Filler />
			<main className="sm:flex sm:flex-wrap bg-zinc-100 min-h-full justify-center">
				<div className="py-8">
					<CheckoutAddress />
					<CheckoutConfirm />
				</div>
			</main>
			<footer className="bg-white h-12">
				<FooterBottom />
			</footer>
		</>
	);
};

export default Checkout;
