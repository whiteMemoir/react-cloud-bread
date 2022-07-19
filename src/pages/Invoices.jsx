import Filler from "../components/Filler";
import FooterBottom from "../components/FooterBottom";
import InvoiceTable from "../components/Invoice/InvoiceTable";
import Navbar from "../components/Navbar";

const Invoices = () => {
	return (
		<>
			<header>
				<Navbar home={false} />
			</header>
			<Filler />
			<main className="sm:flex sm:flex-wrap bg-zinc-100 min-h-full justify-center">
				<div className="py-8">
					<InvoiceTable />
				</div>
			</main>
			<footer className="bg-white h-12">
				<FooterBottom />
			</footer>
		</>
	);
};

export default Invoices;
