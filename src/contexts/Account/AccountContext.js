import { createContext, useEffect, useState } from "react";
import config from "../../config";
import axios from "axios";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
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

	return (
		<AccountContext.Provider
			value={{
				provinceData,
				regencyData,
				districtData,
				villageData,
				setProvince,
				setRegency,
				setDistrict,
			}}
		>
			{children}
		</AccountContext.Provider>
	);
};

export default AccountContext;
