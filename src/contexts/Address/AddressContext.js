import axios from "axios";
import { createContext, useState, useEffect } from "react";
import config from "../../config";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
	const [isSetProvince, setIsSetProvince] = useState(false);
	const [isSetRegency, setIsSetRegency] = useState(true);
	const [isSetDistrict, setIsSetDistrict] = useState(true);
	const [isSetVillage, setIsSetVillage] = useState(true);

	const [addresses, setAddresses] = useState(null);
	const [provinceData, setProvinceData] = useState([]);
	const [regencyData, setRegencyData] = useState([]);
	const [districtData, setDistrictData] = useState([]);
	const [villageData, setVillageData] = useState([]);
	const [province, setProvince] = useState(null);
	const [regency, setRegency] = useState(null);
	const [district, setDistrict] = useState(null);

	useEffect(() => {
		if (!isSetProvince) {
			axios
				.get(`${config.api_region}/provinces.json`)
				.then((res) => setProvinceData(res.data));

			setIsSetProvince(true);
			setIsSetRegency(false);
		}
	}, [provinceData, isSetProvince]);
	useEffect(() => {
		if (province !== null && !isSetRegency) {
			const provinceDetail = provinceData.filter(
				(item) => item.name === province
			);
			axios
				.get(`${config.api_region}/regencies/${provinceDetail[0].id}.json`)
				.then((res) => setRegencyData(res.data));
			setIsSetRegency(true);
			setIsSetDistrict(false);
		}
	}, [province, regencyData, isSetRegency]);
	useEffect(() => {
		if (regency !== null && !isSetDistrict) {
			const regencyDetail = regencyData.filter((item) => item.name === regency);
			axios
				.get(`${config.api_region}/districts/${regencyDetail[0].id}.json`)
				.then((res) => setDistrictData(res.data));
			setIsSetDistrict(true);
			setIsSetVillage(false);
		}
	}, [regency, districtData, isSetDistrict]);
	useEffect(() => {
		if (district !== null && !isSetVillage) {
			const districtDetail = districtData.filter(
				(item) => item.name === district
			);
			axios
				.get(`${config.api_region}/villages/${districtDetail[0].id}.json`)
				.then((res) => setVillageData(res.data));
			setIsSetVillage(true);
		}
	}, [district, villageData, isSetVillage]);

	const getAddress = async (token) => {
		return await axios
			.get(`${config.api_host}/api/delivery-addresses`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((res) => setAddresses(res.data));
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
				addresses,
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
