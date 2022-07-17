import { useContext } from "react";
import HomeContext from "../contexts/Home/HomeContext";

const SearchInput = () => {
	const { keyword, setKeyword } = useContext(HomeContext);
	return (
		<div>
			<div className="mx-10 hidden sm:block">
				<div className="relative">
					<span className="absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							className="w-5 h-5 text-orange-400"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</span>

					<input
						type="text"
						className="w-50 sm:w-60 md:w-96 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-yellow-300"
						placeholder="Search"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
