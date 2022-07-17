import React from "react";

const InvoiceTable = () => {
	return (
		<div class="bg-white">
			<div class="overflow-x-auto border-x border-t">
				<table class="table-auto w-full">
					<tr class="bg-gray-100">
						<th class="text-left p-4 font-medium">Name</th>
						<td class="p-4">Prof. Lucie Waters</td>
					</tr>

					<tr class="border-b hover:bg-gray-50">
						<th class="text-left p-4 font-medium">Email</th>
						<td class="p-4">admin@example.com</td>
					</tr>
					<tr class="border-b hover:bg-gray-50">
						<th class="text-left p-4 font-medium">Role</th>
						<td class="p-4">Administrator</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default InvoiceTable;
