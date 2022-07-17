const styles = {
	ProductList: ["bg-zinc-100", "flex", "justify-center"].join(" "),
	ProductListContainer: ["container", "py-8", "mx-auto"].join(" "),
	ProductListGrid: [
		"grid",
		"grid-cols-2",
		"sm:grid-cols-2",
		"md:grid-cols-3",
		"lg:grid-cols-4",
	].join(" "),
};

const ProductList = (props) => {
	return (
		<section className={styles.ProductList}>
			<div className={styles.ProductListContainer}>
				<div className={styles.ProductListGrid}>{props.children}</div>
			</div>
		</section>
	);
};

export default ProductList;
