import CartItems from "../components/Cart/CartItems";
import Filler from "../components/Filler";
import FooterBottom from "../components/FooterBottom";
import Navbar from "../components/Navbar";

const Cart = () => {
	return (
		<>
			<header>
				<Navbar home={false} />
			</header>
			<Filler />
			<main className="sm:flex sm:flex-wrap bg-zinc-100 min-h-full justify-center">
				<CartItems />
			</main>
			<footer className="bg-white h-12">
				<FooterBottom />
			</footer>
		</>
	);
};

export default Cart;
