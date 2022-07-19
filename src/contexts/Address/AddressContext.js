import axios from "axios";
import { createContext, useState, useEffect } from "react";
import config from "../../config";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
	const [addresses, setAddresses] = useState();
	const [provinceData, setProvinceData] = useState([]);
	const [regencyData, setRegencyData] = useState([]);
	const [districtData, setDistrictData] = useState([]);
	const [villageData, setVillageData] = useState([]);
	const [province, setProvince] = useState(null);
	const [regency, setRegency] = useState(null);
	const [district, setDistrict] = useState(null);

	useEffect(() => {
		axios
			.get(`${config.api_region}/provinces.json`)
			.then((res) => setProvinceData(res.data));
		if (province !== null) {
			const provinceDetail = provinceData.filter(
				(item) => item.name === province
			);
			axios
				.get(`${config.api_region}/regencies/${provinceDetail[0].id}.json`)
				.then((res) => setRegencyData(res.data));
		}
		if (regency !== null) {
			const regencyDetail = regencyData.filter((item) => item.name === regency);
			axios
				.get(`${config.api_region}/districts/${regencyDetail[0].id}.json`)
				.then((res) => setDistrictData(res.data));
		}
		if (district !== null) {
			const districtDetail = districtData.filter(
				(item) => item.name === district
			);
			axios
				.get(`${config.api_region}/villages/${districtDetail[0].id}.json`)
				.then((res) => setVillageData(res.data));
		}
	}, [
		province,
		regency,
		district,
		provinceData,
		regencyData,
		districtData,
		villageData,
	]);

	const getAddress = async (token) => {
		return await axios
			.get(`${config.api_host}/api/delivery-addresses`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((res) => setAddresses(res));
	};

	const createAddress = async (token, data) => {
		return await axios.post(`${config.api_host}/api/delivery-addresses`, data, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	};

	return (
		<AddressContext.Provider
			value={{
				provinceData,
				regencyData,
				districtData,
				villageData,
				setProvince,
				setRegency,
				setDistrict,
				getAddress,
				createAddress,
			}}
		>
			{children}
		</AddressContext.Provider>
	);
};

export default AddressContext;

// router.get(
// 	"/delivery-addresses",
// 	police_check("view", "DeliveryAddress"),
// 	index
// );
// router.post(
// 	"/delivery-addresses",
// 	police_check("create", "DeliveryAddress"),
// 	store
// );
// router.put("/delivery-addresses/:id", update);
// router.delete("/delivery-addresses/:id", destroy);
