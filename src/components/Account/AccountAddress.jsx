import { Space, Table } from "antd";
import AddAddress from "./AddAddress";
import EmptyData from "../EmptyData";
import AddressContext from "../../contexts/Address/AddressContext";
import { useContext, useEffect, useState } from "react";

const columns = [
	{
		title: "Nama",
		dataIndex: "nama",
		key: "nama",
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

const AccountAddress = () => {
	const { getAddress, addresses } = useContext(AddressContext);
	const [isData, setIsData] = useState(false);
	const [isSet, setIsSet] = useState(false);
	const [buttonText, setButtonText] = useState("Tambah Alamat");
	const token = localStorage.getItem("token");
	let data;
	useEffect(() => {
		if (!isSet) {
			getAddress(token);
			if (addresses) {
				if (addresses.count !== 0) {
					setIsData(true);
				}
				setIsSet(true);
			}
		}
	}, [addresses, isSet]);

	const handleClick = () => {
		if (buttonText === "Tambah Alamat") {
			setButtonText("Kembali");
		} else if (buttonText === "Kembali") {
			setButtonText("Tambah Alamat");
		}
	};
	if (addresses) {
		data = addresses.data.map((address, index) => ({
			key: index,
			nama: address.nama,
			detail: `${address.provinsi}, ${address.kabupaten}, ${address.kecamatan}, ${address.kelurahan}, Detail : ${address.detail}`,
		}));
	}

	return (
		<div>
			<button
				onClick={handleClick}
				className="bg-sky-500 hover:bg-sky-400 px-3 py-1 mb-7 rounded-md text-white"
			>
				{buttonText}
			</button>
			<div className={buttonText === "Kembali" ? "hidden" : ""}>
				<div className={isData ? "hidden" : ""}>
					<EmptyData />
				</div>
				<Table
					className={isData ? "" : "hidden"}
					columns={columns}
					dataSource={data}
				/>
			</div>

			<div className={buttonText === "Kembali" ? "" : "hidden"}>
				<AddAddress />
			</div>
		</div>
	);
};

export default AccountAddress;
