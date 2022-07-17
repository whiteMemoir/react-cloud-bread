import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import HomeContext from "../../contexts/Home/HomeContext";

const Paginate = () => {
	const { rows, pages, changePage } = useContext(HomeContext);
	return (
		<nav
			className="flex justify-center items-center flex-wrap flex-row"
			role="navigation"
			aria-label="pagination"
			key={rows}
		>
			<ReactPaginate
				previousLabel={"< Prev"}
				nextLabel={"Next >"}
				pageCount={pages}
				onPageChange={({ selected }) => changePage(selected)}
				containerClassName="pagination-list"
				pageLinkClassName="pagination-link"
				previousLinkClassName="previous"
				nextLinkClassName="next"
				activeLinkClassName="current-page"
				disabledLinkClassName="disabled-page"
			/>
		</nav>
	);
};

export default Paginate;
