import ProductItem from "./components/ProductItem";
import PropTypes from "prop-types";
import "./style.css";

const ProductList = ({ name, price, productKey }) => {
	console.log(name, price);
	const flag = true;

	function renderHeading(getFlag) {
		return getFlag ? (
			<h2 className="product-title">Product Lists</h2>
		) : (
			<p className="product-title">No products available...</p>
		);
	}

	const renderTextBlock = flag ? (
		<h2 className="product-title">Product Lists</h2>
	) : (
		<p className="product-title">No products available...</p>
	);

	let renderTextBlock2 = null;
	if (!flag) {
		renderTextBlock2 = <h2 className="product-title">Product Lists</h2>;
	} else {
		renderTextBlock2 = (
			<p className="product-title">No products available...</p>
		);
	}

	const signal = false;

	function wasOffsideAnaa(signal) {
		return !signal ? (
			<p className="text-center italic line-through text-xl">Offside</p>
		) : (
			<p className="text-center italic underline text-xl">Clear Goal!</p>
		);
	}

	const wasMessiOffice = signal ? (
		<p className="text-center italic line-through text-xl">Offside</p>
	) : (
		<p className="text-center italic underline text-xl">Clear Goal!</p>
	);

	return (
		<section>
			{flag ? (
				<h2 className="product-title">Product Lists</h2>
			) : (
				<p className="product-title">No products available...</p>
			)}
			{renderHeading(flag)}
			{renderTextBlock}
			{renderTextBlock2}
			{/* For SIGNAL */}
			{signal ? (
				<p className="text-center italic line-through text-xl">Offside</p>
			) : (
				<p className="text-center italic underline text-xl">Clear Goal!</p>
			)}
			{wasOffsideAnaa(signal)}
			{wasMessiOffice}
			<div className="product-instance">
				{productKey.map((prod, index) => (
					<ProductItem singleItem={prod} key={index} />
				))}
			</div>
			<p
				style={{
					border: "2px solid red",
					padding: "10px",
					borderRadius: "20px",
					marginTop: "10px",
					marginBottom: "10px",
				}}
			>
				This is a {name}. It costs ${price}
			</p>
			<ProductItem />
		</section>
	);
};

ProductList.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	productKey: PropTypes.node,
};

export default ProductList;
