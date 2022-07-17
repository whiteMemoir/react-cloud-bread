import { useContext } from "react";
import HomeContext from "../../contexts/Home/HomeContext";
import Checkbox from "../Checkbox";

const SidebarFilter = () => {
	const { tags } = useContext(HomeContext);
	return (
		<aside className="bg-white h-full w-40 basis-20 grow sm:flex items-center justify-center sticky top-16 hidden mt-8 mb-20 rounded-tr-2xl rounded-br-2xl py-8 shadow-lg ">
			<div>
				<h1 className="font-bold text-lg mb-2">Filter :</h1>
				<div>
					{tags.map((tag, index) => (
						<Checkbox key={index} {...tag} />
					))}
				</div>
			</div>
		</aside>
	);
};

export default SidebarFilter;
