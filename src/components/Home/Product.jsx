const styles = {
	Card: ["bg-orange-500"].join(" "),
	CardStyle: ["rounded-xl", "bg-white", "mx-4", "mb-10", "shadow-xl"].join(" "),
	CardImage: [
		"object-cover",
		"rounded-tl-xl",
		"rounded-tr-xl",
		"w-full",
		"h-36",
		"sm:h-40",
		"md:h-50",
		"lg:h-56",
	].join(" "),
	CardTitle: ["mt-2", "text-md", "text-gray-900", "ml-2"].join(" "),
	CardPrice: ["text-gray-900", "font-bold", "text-lg", "ml-2", "mb-4"].join(
		" "
	),
	CardButtonCart: [
		"flex",
		"items-center",
		"justify-center",
		"w-full",
		"px-2",
		"py-2",
		"font-medium",
		"tracking-wide",
		"text-white",
		"capitalize",
		"transition-colors",
		"duration-200",
		"transform",
		"bg-gray-800",
		"rounded-bl-xl",
		"rounded-br-xl",
		"hover:bg-gray-700",
		"focus:outline-none",
		"focus:bg-gray-700",
	].join(" "),
};
const Product = (props) => {
	return (
		<div className={styles.CardStyle}>
			<a href="/">
				<img
					className={styles.CardImage}
					src={`http://localhost:3003/images/${props.image}`}
					alt="T-Shirt"
				/>
				<h4 className={styles.CardTitle}>{props.name}</h4>
				<p className={styles.CardPrice}>{props.price}</p>
			</a>

			<button className={styles.CardButtonCart}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5 mx-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
				</svg>
				<span className="mx-1">Add to cart</span>
			</button>
		</div>
	);
};

export default Product;
