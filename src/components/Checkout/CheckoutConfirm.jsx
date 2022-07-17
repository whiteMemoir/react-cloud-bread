import React from "react";

const CheckoutConfirm = () => {
	return (
		<div class="bg-white">
			<div class="overflow-x-auto border-x border-t">
				<table class="table-auto w-full">
					<thead class="border-b">
						<tr class="bg-gray-100">
							<th class="text-left p-4 font-medium">Name</th>
							<th class="text-left p-4 font-medium">Email</th>
							<th class="text-left p-4 font-medium">Role</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b hover:bg-gray-50">
							<td class="p-4">Prof. Lucie Waters</td>
							<td class="p-4">basic@example.com</td>
							<td class="p-4">Administrator</td>
						</tr>
						<tr class="border-b hover:bg-gray-50">
							<td class="p-4">Anahi Bashirian (You)</td>
							<td class="p-4">admin@example.com</td>
							<td class="p-4">Super Administrator</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CheckoutConfirm;
