import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import kitchenBg from "../../authbg.png";
import AuthContext from "../../contexts/Auth/AuthContext";

const Login = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const { loginUser, user, me, setUser } = useContext(AuthContext);
	if (token) {
		me(token);
		if (user !== null) {
			if (user.role === "user") {
				navigate("/");
			}
		}
	}
	const [loginData, setLoginData] = useState({
		email: null,
		password: null,
	});
	const [errorMsg, setErrorMsg] = useState({
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData((prevState) => ({ ...prevState, [name]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			const response = await loginUser(loginData);
			localStorage.setItem("token", response.data.token);
			setUser(response.data);
			if (response.data.error !== 1) {
				navigate("/");
			} else {
				setErrorMsg((prevState) => ({
					...prevState,
					loginCheck: response.data.message,
				}));
			}
		}
	};

	const validate = () => {
		let isValid = true;

		if (loginData.email === null) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				email: "Masukkan email Anda.",
			}));
		}
		if (typeof loginData.email !== "undefined") {
			let pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(loginData.email)) {
				isValid = false;
				setErrorMsg((prevState) => ({
					...prevState,
					email: "Please enter valid email address.",
				}));
			}
		}
		if (loginData.password === null) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				password: "Masukkan password.",
			}));
		}

		return isValid;
	};
	return (
		<div
			className="bg-repeat bg-auto"
			style={{
				backgroundImage: `linear-gradient(
			rgba(255, 209, 149, 0.7),
			rgba(255, 255, 255, 0.5)
		),url(${kitchenBg})`,
				height: "100%",
			}}
		>
			<div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
				<div className="max-w-lg mx-auto">
					<form
						className="p-8 mt-6 mb-0 space-y-4 rounded-lg bg-gray-900 shadow-2xl"
						onSubmit={handleSubmit}
					>
						<p className="text-xl text-center font-black text-amber-300">
							Masuk ke akun
						</p>

						<div>
							<label
								htmlFor="email"
								className="text-sm font-medium text-yellow-100"
							>
								Email
							</label>

							<div className="relative mt-1">
								<input
									type="email"
									id="email"
									className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Masukkan email"
									name="email"
									onChange={handleChange}
								/>

								<span className="absolute inset-y-0 inline-flex items-center right-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
									</svg>
								</span>
								<p className="text-left text-sm text-red-400 mt-1">
									{errorMsg.email}
								</p>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="text-sm font-medium text-yellow-100"
							>
								Password
							</label>

							<div className="relative mt-1">
								<input
									type="password"
									id="password"
									className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Masukkan password"
									name="password"
									onChange={handleChange}
								/>

								<span className="absolute inset-y-0 inline-flex items-center right-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</span>
								<p className="text-left text-sm text-red-400 mt-1">
									{errorMsg.password}
								</p>
							</div>
						</div>

						<button
							type="submit"
							className="disabled:bg-gray-500 disabled:text-gray-800 block w-full px-5 py-3 text-sm font-medium text-yellow-100 bg-indigo-600 hover:bg-indigo-500 rounded-lg"
						>
							Login
						</button>
						<p className="text-left text-sm text-red-400 mt-1">
							{errorMsg.loginCheck}
						</p>
						<div className="flex justify-between">
							<p className="text-sm text-gray-500 inline-block">
								Belum punya akun?
								<Link className="underline hover:text-amber-400" to="/register">
									Daftar di sini
								</Link>
							</p>
							<p className="text-sm text-gray-500 inline-block">
								<Link className="underline hover:text-amber-400" to="/">
									Lihat produk tanpa masuk
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
