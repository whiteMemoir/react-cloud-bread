import axios from "axios";
import { config } from "../../config";

export const getAddress = async () => {
	const { token } = localStorage.getItem("auth")
		? JSON.parse(localStorage.getItem("auth"))
		: {};
	return await axios.get(`${config.api_host}/api/delivery-addresses?limit=`, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

export const createAddress = async (payload) => {
	const { token } = localStorage.getItem("auth")
		? JSON.parse(localStorage.getItem("auth"))
		: {};
	return await axios.post(
		`${config.api_host}/api/delivery-addresses`,
		payload,
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
	);
};

// export const getProvinces = async () => {
// 	await axios.get(
// 		`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
// 	);
// };
// export const getRegencies = async (provinceID) => {
// 	await axios.get(
// 		`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
// 	);
// };
// export const getDistricts = async (regencyId) => {
// 	await axios.get(
// 		`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
// 	);
// };
// export const getVillages = async (districtID) => {
// 	await axios.get(
// 		`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
// 	);
// };
