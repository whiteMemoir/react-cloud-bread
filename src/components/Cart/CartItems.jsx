import { Space, Table, Tag } from "antd";
import React from "react";
const columns = [
	{
		title: "Gambar",
		dataIndex: "gambar",
		key: "gambar",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Barang",
		dataIndex: "barang",
		key: "barang",
	},
	{
		title: "Harga",
		dataIndex: "harga",
		key: "harga",
	},

	{
		title: "Qty",
		key: "qty",
		render: () => (
			<Space size="middle">
				<button className="bg-sky-600 text-white w-6 rounded-sm">-</button>
				<button className="bg-sky-600 text-white w-6 rounded-sm">+</button>
			</Space>
		),
	},
];
const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"],
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"],
	},
];

const CartItems = () => {
	return (
		<div className="py-8 px">
			<Table columns={columns} dataSource={data} />;
		</div>
	);
};

export default CartItems;
