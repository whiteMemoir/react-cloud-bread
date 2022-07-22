import CategoryList from "../components/Home/CategoryList";
import Filler from "../components/Filler";
import FooterBottom from "../components/FooterBottom";
import FooterTop from "../components/FooterTop";
import Navbar from "../components/Navbar";
import Product from "../components/Home/Product";
import ProductList from "../components/Home/ProductList";
import SidebarFilter from "../components/Home/SidebarFilter";
import { useContext, useEffect, useState } from "react";
import Paginate from "../components/Home/Paginate";
import HomeContext from "../contexts/Home/HomeContext";
import AuthContext from "../contexts/Auth/AuthContext";

const Home = () => {
	const { products, categories, tags } = useContext(HomeContext);
	const { me, user } = useContext(AuthContext);
	const token = localStorage.getItem("token");
	useEffect(() => {
		if (token) {
			me(token);
		}
	}, [token]);
	return (
		<>
			<header>
				<Navbar home={true} />
			</header>
			<Filler />
			<div className="bg-zinc-100">
				<div className="container flex flex-row px-4 py-8 mx-auto overflow-x-scroll sm:overflow-hidden ">
					{categories.length > 0 &&
						categories.map((category, index) => {
							return <CategoryList key={index} {...category} />;
						})}
				</div>
			</div>
			{user !== null ? (
				""
			) : (
				<div className="text-center text-lg font-bold text-orange-400 bg-zinc-100">
					<p className=" mb-0">Login untuk belanja!</p>
				</div>
			)}

			<main className="sm:flex sm:flex-wrap bg-zinc-100">
				{tags.length > 0 && <SidebarFilter />}
				<div className="sidebar-grow basis-0">
					<ProductList>
						{products.length > 0 &&
							products.map((product, index) => (
								<Product key={index} {...product} />
							))}
					</ProductList>
					{products.length > 0 && <Paginate />}
				</div>
			</main>
			<footer className="bg-white">
				<FooterTop />
				<FooterBottom />
			</footer>
		</>
	);
};

export default Home;
