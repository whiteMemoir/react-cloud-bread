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
import AccountLayout from "./contexts/Account/AccountLayout";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path="*" element={<NotFound />} />
						<Route element={<HomeLayout />}>
							<Route path="/" element={<Home />} />
						</Route>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route element={<AccountLayout />}>
							<Route path="/account" element={<Account />} />
						</Route>
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/invoices" element={<Invoices />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
