import PropTypes from "prop-types";
import styles from "./productItem.module.css";

const ProductItem = ({ singleItem, key }) => {
	return (
		<div key={key}>
			<p>{singleItem}</p>
			<MainButton />
		</div>
	);
};

const MainButton = () => {
	console.log(styles);

	return <button className={styles.buttonStyle}>Click Me</button>;
};

ProductItem.propTypes = {
	singleItem: PropTypes.string,
	key: PropTypes.string,
};

export default ProductItem;
