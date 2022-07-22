import { Button, Form, Input, Select } from "antd";
import { useContext } from "react";
import TextArea from "antd/lib/input/TextArea";
import AddressContext from "../../contexts/Address/AddressContext";
const { Option } = Select;
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};

const AddAddress = () => {
	const [form] = Form.useForm();
	const token = localStorage.getItem("token");

	const {
		provinceData,
		regencyData,
		districtData,
		villageData,
		setProvince,
		setRegency,
		setDistrict,
		createAddress,
	} = useContext(AddressContext);

	const onFinish = async (values) => {
		const response = await createAddress(token, values);
		if (response) {
			if (response.error !== 1) {
				alert(`Alamat ${values.nama} berhasil ditambahkan`);
				form.resetFields();
			}
		}
	};
	const onReset = () => {
		form.resetFields();
	};

	return (
		<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
			<Form.Item
				name="nama"
				label="Nama"
				rules={[
					{
						required: true,
						message: "Nama untuk alamat harap diisi",
					},
				]}
			>
				<Input name="nama" />
			</Form.Item>
			<Form.Item
				name="provinsi"
				label="Provinsi"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select
					placeholder="Select a option and change input text above"
					allowClear
					onChange={(e) => setProvince(e)}
				>
					{provinceData.map((provinsi, index) => (
						<Option key={index} value={provinsi.name}>
							{provinsi.name}
						</Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item
				noStyle
				shouldUpdate={(prevValues, currentValues) =>
					prevValues.provinsi !== currentValues.provinsi
				}
			>
				{({ getFieldValue }) =>
					getFieldValue("provinsi") !== undefined ? (
						<Form.Item
							name="kabupaten"
							label="Kabupaten / Kota"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Select
								placeholder="Select a option and change input text above"
								allowClear
								onChange={(e) => setRegency(e)}
							>
								{regencyData
									? regencyData.map((kabupaten, index) => (
											<Option key={index} value={kabupaten.name}>
												{kabupaten.name}
											</Option>
									  ))
									: ""}
							</Select>
						</Form.Item>
					) : null
				}
			</Form.Item>
			<Form.Item
				noStyle
				shouldUpdate={(prevValues, currentValues) =>
					prevValues.kabupaten !== currentValues.kabupaten
				}
			>
				{({ getFieldValue }) =>
					getFieldValue("kabupaten") !== undefined ? (
						<Form.Item
							name="kecamatan"
							label="Kecamatan"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Select
								placeholder="Select a option and change input text above"
								allowClear
								onChange={(e) => setDistrict(e)}
							>
								{districtData
									? districtData.map((kecamatan, index) => (
											<Option key={index} value={kecamatan.name}>
												{kecamatan.name}
											</Option>
									  ))
									: ""}
							</Select>
						</Form.Item>
					) : null
				}
			</Form.Item>
			<Form.Item
				noStyle
				shouldUpdate={(prevValues, currentValues) =>
					prevValues.kecamatan !== currentValues.kecamatan
				}
			>
				{({ getFieldValue }) =>
					getFieldValue("kecamatan") !== undefined ? (
						<Form.Item
							name="kelurahan"
							label="Kelurahan"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Select
								placeholder="Select a option and change input text above"
								allowClear
							>
								{villageData
									? villageData.map((kelurahan, index) => (
											<Option key={index} value={kelurahan.name}>
												{kelurahan.name}
											</Option>
									  ))
									: ""}
							</Select>
						</Form.Item>
					) : null
				}
			</Form.Item>
			<Form.Item
				name="detail"
				label="Detail"
				rules={[
					{
						required: true,
					},
				]}
			>
				<TextArea />
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
				<Button htmlType="button" onClick={onReset}>
					Reset
				</Button>
			</Form.Item>
		</Form>
	);
};

export default AddAddress;
