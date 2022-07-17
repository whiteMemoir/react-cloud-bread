import axios from "axios";
import { config } from "../../config";

let category;

export const getProducts = async (params) => {
	return await axios.get(`${config.api_host}/api/products`, params);
};
export const getCategories = async (params) => {
	return await axios.get(`${config.api_host}/api/categories`, params);
};
export const getTagsByCategory = async (params) => {
	return await axios.get(`${config.api_host}/api/tags/${category}`, params);
};
