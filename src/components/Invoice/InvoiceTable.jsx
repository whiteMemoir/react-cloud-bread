import React, { useContext, useEffect, useState } from "react";
import OrderContext from "../../contexts/Order/OrderContext";
import Invoices from "../../pages/Invoices";

const InvoiceTable = () => {
	const { getInvoiceByOrderId, orders, getOrders, invoice } =
		useContext(OrderContext);
	const [isSetOrder, setIsSetOrder] = useState(false);
	// const [isSetInvoice, setIsSetInvoice] = useState(false);
	const token = localStorage.getItem("token");
	useEffect(() => {
		if (!isSetOrder) {
			getOrders(token);
			if (orders.length > 0) {
				getInvoiceByOrderId(token, orders[0]._id);
				setIsSetOrder(true);
			}
		}
	}, [orders, isSetOrder, invoice]);
	// useEffect(() => {
	// 	if (orders.length > 0) {
	// 		if (invoice.length > 0) {
	// 		}
	// 	}
	// }, [invoice]);

	console.log(orders);
	console.log(invoice);
	return (
		<>
			{Object.keys(invoice).length > 0 ? (
				<div class="bg-white rounded-lg">
					<div class="overflow-x-auto border-x border-t rounded-lg">
						<table class="table-auto w-full">
							<tbody>
								<tr class="bg-gray-100">
									<th class="text-left p-4 font-medium">Invoice</th>
									<td class="p-4"></td>
								</tr>
								<tr class="border-b">
									<th class="text-left p-4 pr-20 font-medium">Status</th>
									<td class="p-4">{invoice.payment_status}</td>
								</tr>
								<tr class="border-b">
									<th class="text-left p-4 pr-20 font-medium">Order ID</th>
									<td class="p-4">{invoice.order.order_number}</td>
								</tr>
								<tr class="border-b">
									<th class="text-left p-4 pr-20 font-medium">Total Harga</th>
									<td class="p-4">{invoice.total}</td>
								</tr>
								<tr class="border-b">
									<th class="text-left p-4 pr-20 font-medium">
										Tagihan kepada
									</th>
									<td class="p-4">
										<p className="text-md font-medium">
											{invoice.user.full_name}
										</p>
										<p>{invoice.user.email}</p>
										<p>{`${invoice.delivery_address.provinsi}, ${invoice.delivery_address.kabupaten}, ${invoice.delivery_address.kecamatan}, ${invoice.delivery_address.kelurahan}, DETAIL : ${invoice.delivery_address.detail}`}</p>
									</td>
								</tr>
								<tr class="border-b">
									<th class="text-left p-4 pr-20 font-medium">
										Pembayaran kepada
									</th>
									<td class="p-4">
										<p className="text-md font-medium">Saya-Saya</p>
										<p>emailsaya@ymail.com</p>
										<p>BRI</p>
										<p>xxxxx-xxxxxxx-567-89</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<h1 className="text-lg font-bold text-gray-700">Wait . . .</h1>
			)}
		</>
	);
};

export default InvoiceTable;
