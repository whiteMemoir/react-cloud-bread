import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Invoices from "./pages/Invoices";
import NotFound from "./pages/NotFound";
import HomeLayout from "./contexts/Home/HomeLayout";
import AuthLayout from "./contexts/Auth/AuthLayout";
import AddressLayout from "./contexts/Address/AddressLayout";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<AuthLayout />}>
						<Route path="*" element={<NotFound />} />
						<Route element={<HomeLayout />}>
							<Route path="/" element={<Home />} />
						</Route>
						<Route element={<AddressLayout />}>
							<Route path="/account" element={<Account />} />
						</Route>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/invoices" element={<Invoices />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
