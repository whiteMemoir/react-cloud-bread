import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import logoImg from "../logo-bread.png";
import { FaUser } from "react-icons/fa";
import { IoBagHandle, IoMenuSharp } from "react-icons/io5";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import AuthContext from "../contexts/Auth/AuthContext";
import CartContext from "../contexts/Cart/CartContext";

const styles = {
	Nav: [
		"h-14",
		"sm:h-20",
		"bg-white",
		"flex items-center",
		"sm:text-left",
		"px-3",
		"justify-center",
		"sm:justify-between",
		"w-full",
		"fixed",
		"z-10",
	].join(" "),
	NavLogo: ["sm:w-48", "w-40", "mx-5"].join(" "),
	NavText: ["text-gray-50", "mr-14"].join(" "),
	NavIcons: [
		"hidden",
		"text-gray-600",
		"sm:flex",
		"sm:justify-end",
		"sm:text-xl",
	].join(" "),
	IconItem: ["mx-3", "sm:hover:text-orange-500"].join(" "),
	MobileMenuIcon: ["fixed", "right-7", "w-56", "text-right", "sm:hidden"].join(
		" "
	),
	MobileMenu: ["relative", "inline-block", "text-left"].join(" "),
	MobileMenuButton: [
		"inline-flex",
		"w-full",
		"justify-center",
		"rounded-md",
		"bg-black",
		"bg-opacity-20",
		"px-4",
		"py-2",
		"text-sm",
		"font-medium",
		"text-white",
		"hover:bg-opacity-30",
		"focus:outline-none",
		"focus-visible:ring-2",
		"focus-visible:ring-white",
		"focus-visible:ring-opacity-75",
	].join(" "),
	MobileMenuItems: [
		"hover:text-white",
		"absolute",
		"right-0",
		"mt-2",
		"w-56",
		"origin-top-right",
		"divide-y",
		"divide-gray-100",
		"rounded-md",
		"bg-white",
		"shadow-lg",
		"ring-1",
		"ring-black",
		"ring-opacity-5",
		"focus:outline-none",
	].join(" "),
	MobileMenuItemActive: [
		"bg-orange-400",
		"text-white",
		"group",
		"flex",
		"w-full",
		"items-center",
		"rounded-md",
		"px-2",
		"py-2",
		"text-sm",
	].join(" "),
	MobileMenuItemInactive: [
		"text-gray-900",
		"hover:!text-white",
		"group",
		"flex",
		"w-full",
		"items-center",
		"rounded-md",
		"px-2",
		"py-2",
		"text-sm",
	].join(" "),
};

const Navbar = ({ home }) => {
	const { isHome, setIsHome, user } = useContext(AuthContext);
	const { productCount, getCarts, carts } = useContext(CartContext);
	const [isSet, setIsSet] = useState(false);
	const token = localStorage.getItem("token");
	setIsHome(home);
	useEffect(() => {
		if (!isSet) {
			getCarts(token);
			if (carts.length > 0) {
				setIsSet(true);
			}
		}
	}, [isSet]);
	console.log(carts);
	return (
		<div className={styles.Nav}>
			<div className={styles.NavLogo}>
				<Link to="/">
					<img src={logoImg} alt="" />
				</Link>
			</div>
			<div>{isHome ? <SearchInput /> : ""}</div>
			{user !== null ? (
				<div className={`${styles.NavIcons}`}>
					<Tooltip title="keranjang" color="volcano" placement="bottomRight">
						<Link to="/cart" className={styles.IconItem}>
							<div className="relative">
								{productCount !== 0 ? (
									<div className="rounded-full bg-black w-5 h-5 absolute bottom-2 right-3">
										<span className="text-xs text-white text-center absolute cart-count-position">
											{productCount}
										</span>
									</div>
								) : (
									""
								)}
								<IoBagHandle />
							</div>
						</Link>
					</Tooltip>
					<Tooltip>
						<Link to="/account" className={`${styles.IconItem} mr-5`}>
							<div>
								<FaUser />
							</div>
						</Link>
					</Tooltip>
				</div>
			) : (
				<div className={`${styles.NavIcons}`}>
					<Tooltip title="login" color="volcano" placement="bottomRight">
						<Link to="/login" className={`${styles.IconItem} mr-5`}>
							<div>
								<FaUser />
							</div>
						</Link>
					</Tooltip>
				</div>
			)}

			{/* Mobile dropdown menu */}
			<div className={styles.MobileMenuIcon}>
				<Menu as="div" className={styles.MobileMenu}>
					<div>
						<Menu.Button className={styles.MobileMenuButton}>
							<IoMenuSharp />
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className={styles.MobileMenuItems}>
							{user !== null ? (
								<div className="px-1 py-1">
									<Menu.Item>
										{({ active }) => (
											<Link
												to="/account"
												className={`${
													active
														? styles.MobileMenuItemActive
														: styles.MobileMenuItemInactive
												} icon-text-white`}
											>
												<FaUser /> <span className="ml-3">Akun</span>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												to="/cart"
												className={`${
													active
														? styles.MobileMenuItemActive
														: styles.MobileMenuItemInactive
												} icon-text-white`}
											>
												<IoBagHandle /> <span className="ml-3">Keranjang</span>
											</Link>
										)}
									</Menu.Item>
								</div>
							) : (
								<div className="px-1 py-1">
									<Menu.Item>
										{({ active }) => (
											<Link
												to="/login"
												className={`${
													active
														? styles.MobileMenuItemActive
														: styles.MobileMenuItemInactive
												} icon-text-white`}
											>
												<FaUser /> <span className="ml-3">Akun</span>
											</Link>
										)}
									</Menu.Item>
								</div>
							)}
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	);
};

export default Navbar;
