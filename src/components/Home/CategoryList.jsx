import { useContext } from "react";
import HomeContext from "../../contexts/Home/HomeContext";

const CategoryList = (props) => {
	const { setCategory } = useContext(HomeContext);
	return (
		<button
			className="w-20 h-20 mr-4 shrink-0 rounded-3xl shadow-lg flex items-center flex-column text-xs bg-white relative hover:bg-orange-200 focus:text-white focus:bg-orange-300 focus:outline-none"
			onClick={() => setCategory(props.name)}
		>
			<img alt="" className="w-10 absolute left-5 top-2" src={props.img} />
			<span
				className={`absolute bottom-4 ${
					props.name === "Whole Cake" ? "left-3" : "left-5"
				} tracking-tighter`}
			>
				{props.name}
			</span>
		</button>
	);
};

export default CategoryList;
