import { Space, Table, Tooltip } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import AuthContext from "../../contexts/Auth/AuthContext";
import CartContext from "../../contexts/Cart/CartContext";
import AddressContext from "../../contexts/Address/AddressContext";
import axios from "axios";
import OrderContext from "../../contexts/Order/OrderContext";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
	const navigate = useNavigate();
	const { carts, setCarts, setProductCount, saveCart } =
		useContext(CartContext);
	const { getAddress, addresses } = useContext(AddressContext);
	const { user } = useContext(AuthContext);
	const { createOrder } = useContext(OrderContext);
	const [isSet, setIsSet] = useState(false);
	const [orderAddress, setOrderAddress] = useState(null);
	const token = localStorage.getItem("token");

	let cartColumns, cartData, addressColumns, addressData;
	useEffect(() => {
		if (!isSet) {
			getAddress(token);
			if (addresses) {
				if (addresses.count !== 0) {
				}
				setIsSet(true);
			}
		}
	}, [addresses, isSet]);
	const rowSelection = {
		onChange: (keyVal) => {
			const [getValue] = keyVal;
			const setAddressDelivery = addresses.data.find(
				(address, index) => index === getValue
			);
			setOrderAddress(setAddressDelivery._id);
		},
		getCheckboxProps: (record) => ({
			disabled: record.name === "Disabled User",
			// Column configuration not to be checked
			name: record.name,
		}),
	};

	const substractQty = async (cart) => {
		let data = [];
		const isSameCartItem = carts.find(
			(item, index) => item[index] === cart[index]
		);
		if (isSameCartItem.qty === 1) {
			data = carts
				.map((cart) => ({
					...cart,
					qty:
						isSameCartItem.name === cart.name && cart.qty !== 0
							? cart.qty - 1
							: cart.qty,
				}))
				.filter((item, index) => item[index] !== cart[index]);
		} else if (isSameCartItem) {
			data = carts.map((cart) => ({
				...cart,
				qty:
					isSameCartItem.name === cart.name && cart.qty !== 0
						? cart.qty - 1
						: cart.qty,
			}));
		} else {
			data = [...carts];
		}
		setCarts(data);
		setProductCount(data.length);
		await saveCart(token, data);
	};
	const addQty = async (cart) => {
		let data = [];
		const isSameCartItem = carts.find(
			(item, index) => item[index] === cart[index]
		);
		if (isSameCartItem) {
			data = carts.map((cart) => ({
				...cart,
				qty: isSameCartItem.name === cart.name ? cart.qty + 1 : cart.qty,
			}));
		} else {
			data = [...carts];
		}
		setCarts(data);
		setProductCount(data.length);
		await saveCart(token, data);
	};
	const deleteProduct = async (cart) => {
		let data = [];

		const isSameCartItem = carts.find(
			(item, index) => item[index] === cart[index]
		);
		if (isSameCartItem) {
			data = carts.filter((item, index) => item[index] !== cart[index]);
		} else {
			data = [...carts];
		}
		setCarts(data);
		setProductCount(data.length);
		await saveCart(token, data);
	};
	const checkout = async () => {
		try {
			let data = {
				delivery_fee: 10000,
				delivery_address: orderAddress,
				order_items: carts,
				user,
			};
			if (orderAddress !== null) {
				// console.log(data);
				await createOrder(token, data);
				navigate("../orders", { replace: true });
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (carts) {
		cartColumns = [
			{
				title: "Gambar",
				dataIndex: "gambar",
				align: "center",
				key: "gambar",
				render: (gambar) => <img src={gambar} className="w-56" alt="" />,
			},
			{
				title: "Barang",
				align: "center",
				dataIndex: "barang",
				key: "barang",
			},
			{
				title: "Harga",
				align: "center",
				dataIndex: "harga",
				key: "harga",
			},

			{
				title: "Qty",
				align: "center",
				dataIndex: "qty",
				key: "qty",
				render: (cart) => (
					<Space size="middle">
						<button
							onClick={() => substractQty(cart)}
							className="bg-sky-600 text-white w-6 rounded-sm hover:bg-orange-500"
						>
							-
						</button>
						<span>{cart.qty}</span>
						<button
							onClick={() => addQty(cart)}
							className="bg-sky-600 text-white w-6 rounded-sm hover:bg-orange-500"
						>
							+
						</button>
					</Space>
				),
			},
			{
				title: "Delete",
				dataIndex: "delete",
				align: "center",
				key: "delete",
				render: (cart) => (
					<Space size="middle">
						<Tooltip
							title="hapus barang dari keranjang"
							color="volcano"
							placement="bottom"
						>
							<button onClick={() => deleteProduct(cart)}>
								<IoClose />
							</button>
						</Tooltip>
					</Space>
				),
			},
		];
		cartData = carts.map((cart, index) => ({
			key: index,
			gambar: `http://localhost:3003/images/${cart.product.image}`,
			barang: cart.name,
			price: cart.price,
			qty: cart,
			delete: cart,
		}));
	}

	if (addresses) {
		addressColumns = [
			{
				title: "Nama Alamat",
				dataIndex: "addressName",
				align: "center",
			},
			{
				title: "Detail Alamat",
				dataIndex: "addressDetail",
				// render: (text) => <p>{text}</p>,
			},
		];
		addressData = addresses.data.map((address, index) => ({
			key: index,
			addressName: address.nama,
			addressDetail: `${address.provinsi}, ${address.kabupaten}, ${address.kecamatan}, ${address.kelurahan}, Detail : ${address.detail}`,
		}));
	}
	console.log(addresses);
	console.log(user);
	console.log(carts);
	console.log(orderAddress);
	return (
		<div className="py-8 px">
			<>
				<h3 className="text-lg font-bold text-gray-800 mb-5">Keranjang Anda</h3>
				<div className="shadow-xl">
					<Table
						columns={cartColumns}
						dataSource={cartData}
						pagination={false}
						scroll={{ x: "max-content" }}
					/>
				</div>
			</>

			<h3 className="text-lg font-bold text-gray-800 mb-5 mt-8">
				Pilih Alamat Pengantaran
			</h3>
			<div className="shadow-xl">
				<Table
					rowSelection={{
						type: "radio",
						...rowSelection,
					}}
					columns={addressColumns}
					dataSource={addressData}
					pagination={false}
					scroll={{ x: "max-content" }}
				/>
			</div>
			<div className="flex justify-end">
				<button
					onClick={() => checkout(carts)}
					className="bg-sky-600 hover:bg-orange-500 text-md font-bold text-white px-3 py-2 rounded-lg mt-8 shadow-xl disabled:bg-slate-500"
					disabled={carts.length > 0 && orderAddress !== null ? false : true}
				>
					Pesan
				</button>
			</div>
		</div>
	);
};

export default CartItems;
