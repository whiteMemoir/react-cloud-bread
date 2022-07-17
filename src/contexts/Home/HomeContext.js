import { createContext, useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState("");
	const [tags, setTags] = useState([]);
	const [tag, setTag] = useState([]);
	const [page, setPage] = useState(0);
	const [pages, setPages] = useState(0);
	const [rows, setRows] = useState(0);
	const [keyword, setKeyword] = useState("");
	const changePage = (selected) => setPage(selected);

	const getProducts = () => {
		let searchQuery = "";
		let categoryQuery = "";
		let tagsQuery = [];
		if (keyword.length > 0) {
			searchQuery = `q=${keyword}`;
		} else if (keyword === "") {
			searchQuery = "";
		}
		if (category === "All") {
			categoryQuery = "";
		} else if (category.length > 0) {
			categoryQuery = `&category=${encodeURI(category)}`;
		}
		if (tag.length > 0) {
			tagsQuery = tag.map((item) => `tags[]=${item}&`).join("");
		} else if (tag.length === 0) {
			tagsQuery = "";
		}

		try {
			axios
				.get(
					`${config.api_host}/api/products?${searchQuery}&page=${page}${categoryQuery}&${tagsQuery}`
				)
				.then((res) => {
					setProducts(res.data.data);
					setPage(res.data.page);
					setPages(res.data.totalPage);
					setRows(res.data.totalRows);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const getCategories = () => {
		axios
			.get(`${config.api_host}/api/categories`)
			.then((res) => setCategories(res.data));
	};

	const getTags = () => {
		axios.get(`${config.api_host}/api/tags`).then((res) => setTags(res.data));
	};

	useEffect(() => {
		getProducts();
	}, [page, tag, category, keyword]);

	useEffect(() => {
		getCategories();
		getTags();
	}, []);
	return (
		<HomeContext.Provider
			value={{
				products,
				categories,
				tags,
				tag,
				rows,
				page,
				pages,
				setPage,
				setCategory,
				setTag,
				setKeyword,
				keyword,
				changePage,
			}}
		>
			{children}
		</HomeContext.Provider>
	);
};

export default HomeContext;
