import { Space, Table, Tag } from "antd";
import AddAddress from "./AddAddress";
import EmptyData from "../EmptyData";

const columns = [
	{
		title: "Nama",
		dataIndex: "nama",
		key: "nama",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Detail",
		dataIndex: "detail",
		key: "detail",
	},

	{
		title: "Aksi",
		key: "aksi",
		render: () => (
			<Space size="middle">
				<a>Update</a>
				<a>Delete</a>
			</Space>
		),
	},
];
const data = [
	{
		key: "1",
		nama: "London",
		detail: "London No. 1 Lake Park",
	},
	{
		key: "2",
		nama: "New York",
		detail: "London No. 1 Lake Park",
	},
	{
		key: "3",
		nama: "Los Angeles",
		detail: "London No. 1 Lake Park",
	},
];

const AccountAddress = () => {
	return (
		<div>
			<button className="bg-sky-500 hover:bg-sky-400 px-3 py-1 mb-7 rounded-md text-white">
				Tambah Alamat
			</button>
			<div className="hidden">
				<EmptyData />
			</div>
			<div className="">
				<AddAddress />
			</div>
			<Table className="" columns={columns} dataSource={data} />
		</div>
	);
};

export default AccountAddress;
