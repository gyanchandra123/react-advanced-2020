import React from "react";
import PropTypes from "prop-types";
import defaultImages from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  console.log(image, name, price);
  return (
    <article className="product">
      <img src={url || defaultImages } alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  image: defaultImages,
  name: "default name",
  price: 3.99,
};

export default Product;
