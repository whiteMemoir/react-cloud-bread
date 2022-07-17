import { useContext } from "react";
import HomeContext from "../contexts/Home/HomeContext";

const Checkbox = (props) => {
	const { tag, setTag } = useContext(HomeContext);
	return (
		<div className="form-check">
			<input
				className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
				type="checkbox"
				id="flexCheckChecked"
				onChange={(e) => {
					if (e.target.checked === true) {
						setTag((prevState) => [...prevState, props.name]);
					} else if (e.target.checked === false) {
						return setTag(tag.filter((item) => item !== props.name));
					}
				}}
			/>
			<label
				className="form-check-label inline-block text-gray-800"
				htmlFor="flexCheckChecked"
			>
				{props.name}
			</label>
		</div>
	);
};

export default Checkbox;
