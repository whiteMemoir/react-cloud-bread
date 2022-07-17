import React from "react";

const Input = () => {
	return (
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
	);
};

export default Input;
