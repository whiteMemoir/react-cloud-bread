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
	console.log(orders);
	let getOrderItems = orders.map((order) => order.order_items);
	// console.log(getOrderItems);
	const expandedRowRender = () => {
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
		const data = getOrderItems.forEach((orderItem) => {
			return orderItem.map((item, index) => ({
				key: index,
				barang: item.name,
				jumlah: item.qty,
				totalHarga: item.price * item.qty,
			}));
		});

		return <Table columns={columns} dataSource={data} pagination={false} />;
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
			orderId: order._id,
			total: grandTotal,
			status: order.status,
		};
	});

	// for (let i = 0; i < 4; i++) {
	// 	data.push({
	// 		key: i.toString(),
	// 		orderId: "Screem",
	// 		total: "iOS",
	// 		status: "10.3.4.5654",
	// 	});
	// }

	return (
		<>
			<div className="">
				<EmptyData />
			</div>
			<div className="">
				<Table
					columns={columns}
					expandable={{
						expandedRowRender,
						defaultExpandedRowKeys: ["0"],
					}}
					dataSource={data}
					size="middle"
				/>
			</div>
		</>
	);
};

export default AccountOrder;
