import { Table } from "antd";
import EmptyData from "../EmptyData";
const AccountOrder = () => {
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
		const data = [];

		for (let i = 0; i < 1; ++i) {
			data.push({
				key: i.toString(),
				barang: "2014-12-24 23:12:00",
				jumlah: "This is production name",
				totalHarga: "Upgraded: 56",
			});
		}

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
	const data = [];

	for (let i = 0; i < 4; i++) {
		data.push({
			key: i.toString(),
			orderId: "Screem",
			total: "iOS",
			status: "10.3.4.5654",
		});
	}

	return (
		<>
			<div className="">
				<EmptyData />
			</div>
			<div className="hidden">
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
