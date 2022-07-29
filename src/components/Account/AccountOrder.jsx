import { Table } from "antd";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../contexts/Order/OrderContext";
import EmptyData from "../EmptyData";
const AccountOrder = () => {
	const { getOrders, orders } = useContext(OrderContext);
	const [isSet, setIsSet] = useState(false);
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (!isSet) {
			getOrders(token);
			if (orders.length > 0) {
				setIsSet(true);
			}
		}
	}, [isSet]);
	let getOrderItems = orders.map((order) => order.order_items);
	const expandedRowRender = (row) => {
		const columns = [
			{
				title: "Barang",
				dataIndex: "barang",
				key: "barang",
			},
			{
				title: "Jumlah",
				dataIndex: "jumlah",
				key: "jumlah",
			},
			{
				title: "Total  Harga",
				dataIndex: "totalHarga",
				key: "totalHarga",
			},
		];
		let data = [];
		for (let i = 0; i < getOrderItems.length; i++) {
			data[i] = [];
			for (let index = 0; index < getOrderItems[i].length; index++) {
				let objectData = {
					key: getOrderItems[i][index],
					barang: getOrderItems[i][index].name,
					jumlah: getOrderItems[i][index].qty,
					totalHarga:
						getOrderItems[i][index].price * getOrderItems[i][index].qty,
				};
				data[i].push(objectData);
			}
		}
		// console.log(data);

		return (
			<Table columns={columns} dataSource={data[row.key]} pagination={false} />
		);
	};

	const columns = [
		{
			title: "Order ID",
			dataIndex: "orderId",
			key: "orderId",
		},
		{
			title: "Total",
			dataIndex: "total",
			key: "total",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
		},
		{
			title: "Invoice",
			key: "invoice",
			render: () => (
				<button className="rounded-md bg-green-600 text-white px-3 py-1 hover:bg-green-500">
					Invoice
				</button>
			),
		},
	];
	const data = orders.map((order, index) => {
		const totalCount = order.order_items.reduce(
			(acc, item) => acc + item.price * item.qty,
			0
		);
		const grandTotal = totalCount + order.delivery_fee;
		return {
			key: index,
			orderId: order.order_number,
			total: grandTotal,
			status: order.status,
		};
	});
	console.log(orders);
	return (
		<>
			{orders.length > 0 ? (
				<Table
					columns={columns}
					expandedRowRender={expandedRowRender}
					dataSource={data}
					size="middle"
				/>
			) : (
				<EmptyData />
			)}
		</>
	);
};

export default AccountOrder;
