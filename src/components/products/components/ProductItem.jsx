import PropTypes from "prop-types";
import vite from "/vite.svg";

const ProductItem = ({ productName, key, buttonCaption }) => {
  return (
    <div
      key={key}
      className="h-60 w-48 border border-slate-700 rounded-xl shadow-xl p-2 flex flex-col items-center justify-center gap-2"
    >
      <img src={vite} alt={"vite-logo"} className="h-2/3 w-36" />
      <div className="h-1/3 gap-1 flex flex-col">
        <p className="text-center">{productName}</p>
        <MainButton buttonCaption={buttonCaption} />
      </div>
    </div>
  );
};

const MainButton = ({ buttonCaption }) => {
  //   console.log(styles);

  return (
    <button className="bg-neutral-500 px-2 py-1 rounded-lg mx-auto">
      {buttonCaption}
    </button>
  );
};

ProductItem.propTypes = {
  productName: PropTypes.string,
  key: PropTypes.string,
  buttonCaption: PropTypes.string,
};

MainButton.propTypes = {
  buttonCaption: PropTypes.string,
};

export default ProductItem;
