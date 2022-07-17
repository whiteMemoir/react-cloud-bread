import kitchenBg from "../../authbg.png";

const Register = () => {
	return (
		<div
			className="bg-repeat bg-auto"
			style={{
				backgroundImage: `url(${kitchenBg})`,
				height: "100%",
			}}
		>
			<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
				<div class="max-w-lg mx-auto">
					<form
						action=""
						class="p-8 mt-6 mb-0 space-y-4 rounded-lg bg-gray-900 shadow-2xl"
					>
						<p class="text-xl text-center font-black text-amber-300">
							Daftar Akun
						</p>

						<div>
							<label for="email" class="text-sm font-medium text-yellow-100">
								Email
							</label>

							<div class="relative mt-1">
								<input
									type="email"
									id="email"
									class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Enter email"
								/>
							</div>
						</div>

						<div>
							<label for="password" class="text-sm font-medium text-yellow-100">
								Password
							</label>

							<div class="relative mt-1">
								<input
									type="password"
									id="password"
									class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Enter password"
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
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</span>
							</div>
						</div>

						<button
							type="submit"
							class="block w-full px-5 py-3 text-sm font-medium text-yellow-100 bg-indigo-600 hover:bg-indigo-500 rounded-lg"
						>
							Sign in
						</button>

						<p class="text-sm text-center text-gray-500">
							No account?
							<a class="underline hover:text-amber-400" href="/">
								Sign up
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
