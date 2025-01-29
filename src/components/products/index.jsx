import ProductItem from "./components/ProductItem";
import PropTypes from "prop-types";
import "./style.css";
import { useState } from "react";

const prodNames = [
  { title: "Plantain Chips", buttonCap: "Add To Cart" },
  { title: "Grapes", buttonCap: "Pre-order" },
  { title: "Apple", buttonCap: "Available" },
  { title: "Chicken Wings", buttonCap: "Out of stock" },
  { title: "Pizza", buttonCap: "Buy 1, get 1 free" },
  { title: "Mac Book Pro - M2", buttonCap: "Durability" },
  { title: "Rolls Royce Phantom", buttonCap: "For rentals" },
  { title: "KIVO Gari", buttonCap: "WholeSale only" },
];

const ProductList = ({ name, price, productKey }) => {
  console.log(name, price);

  const flag = true; // declaring state...

  function renderHeading(getFlag) {
    return getFlag ? (
      <h2 className="product-title">Goods in stock!</h2>
    ) : (
      <p className="product-title">Out of stock...</p>
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
      {/* Testing out PROPS */}
      <div>
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
        <div className="flex gap-2 flex-wrap">
          {prodNames.map((prod, index) => (
            <ProductItem
              key={index}
              productName={prod.title}
              buttonCaption={prod.buttonCap}
            />
          ))}
        </div>
      </div>

      {/* Testing out TENARY OPERATOR */}
      {flag ? (
        <h2 className="text-3xl text-center font-black pt-5">
          Goods in stock!
        </h2>
      ) : (
        <p className="product-title">Out of stock...</p>
      )}
      {renderHeading(!flag)}
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
    </section>
  );
};

ProductList.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  productKey: PropTypes.node,
};

export default ProductList;
