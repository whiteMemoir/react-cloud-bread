import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import kitchenBg from "../../authbg.png";
import AuthContext from "../../contexts/Auth/AuthContext";

const Register = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const { registerUser, me, user } = useContext(AuthContext);
	if (token) {
		me(token);
		if (user !== null) {
			if (user.role === "user") {
				navigate("/");
			}
		}
	}
	const [registerData, setRegisterData] = useState({
		full_name: null,
		email: null,
		password: null,
	});
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [errorMsg, setErrorMsg] = useState({
		full_name: "",
		email: "",
		password: "",
		confirm_password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "confirm_password") {
			setConfirmPassword(value);
		}
		setRegisterData((prevState) => ({ ...prevState, [name]: value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			await registerUser(registerData);
			alert("Registrasi berhasil!");
			navigate("/login");
		}
	};
	const validate = () => {
		let isValid = true;
		if (registerData.full_name === null) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				full_name: "Masukkan nama Anda.",
			}));
		}
		if (registerData.email === null) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				email: "Masukkan email Anda.",
			}));
		}
		if (typeof registerData.email !== "undefined") {
			let pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(registerData.email)) {
				isValid = false;
				setErrorMsg((prevState) => ({
					...prevState,
					email: "Masukkan email yang valid!.",
				}));
			}
		}
		if (registerData.password === null) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				password: "Masukkan password.",
			}));
		}
		if (confirmPassword === null) {
			isValid = false;
			setErrorMsg((prevState) => ({
				...prevState,
				confirm_password: "Masukkan konfirmasi password.",
			}));
		}
		if (
			typeof registerData.password !== "undefined" &&
			typeof confirmPassword !== "undefined"
		) {
			if (registerData.password !== confirmPassword) {
				isValid = false;
				setErrorMsg((prevState) => ({
					...prevState,
					password: "Password tidak sesuai.",
				}));
			}
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
			<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
				<div class="max-w-lg mx-auto">
					<form
						onSubmit={handleSubmit}
						class="p-8 mt-6 mb-0 space-y-4 rounded-lg bg-gray-900 shadow-2xl"
					>
						<p class="text-xl text-center font-black text-amber-300">
							Daftar Akun
						</p>
						<div>
							<label
								htmlFor="full_name"
								class="text-sm font-medium text-yellow-100"
							>
								Nama lengkap
							</label>

							<div class="relative mt-1">
								<input
									type="full_name"
									id="full_name"
									class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Masukkan nama lengkap"
									name="full_name"
									onChange={handleChange}
								/>
							</div>
							<p className="text-left text-sm text-red-400 mt-1">
								{errorMsg.full_name}
							</p>
						</div>
						<div>
							<label
								htmlFor="email"
								class="text-sm font-medium text-yellow-100"
							>
								Email
							</label>

							<div class="relative mt-1">
								<input
									type="email"
									id="email"
									class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Masukkan email"
									name="email"
									onChange={handleChange}
								/>
								<span class="absolute inset-y-0 inline-flex items-center right-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-5 h-5 text-gray-400"
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
								class="text-sm font-medium text-yellow-100"
							>
								Password
							</label>

							<div class="relative mt-1">
								<input
									type="password"
									id="password"
									class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Masukkan password"
									name="password"
									onChange={handleChange}
								/>

								<span class="absolute inset-y-0 inline-flex items-center right-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-5 h-5 text-gray-400"
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
						<div>
							<label
								htmlFor="confirm_password"
								class="text-sm font-medium text-yellow-100"
							>
								Konfirmasi Password
							</label>

							<div class="relative mt-1">
								<input
									type="password"
									id="confirm_password"
									class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Masukkan konfirmasi password"
									name="confirm_password"
									onChange={handleChange}
								/>

								<span class="absolute inset-y-0 inline-flex items-center right-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-5 h-5 text-gray-400"
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
									{errorMsg.confirm_password}
								</p>
							</div>
						</div>
						<button
							type="submit"
							class="disabled:bg-gray-500 disabled:text-gray-800 block w-full px-5 py-3 text-sm font-medium text-yellow-100 bg-indigo-600 hover:bg-indigo-500 rounded-lg"
						>
							Daftar
						</button>
						.
						<p class="text-sm text-center text-gray-500 inline-block">
							Sudah punya akun?
							<Link class="underline hover:text-amber-400" to="/login">
								Login di sini
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
