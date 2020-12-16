import React from "react";

import img from "../dummy-data/img/ninjaturtles.png";

const Product = ({ product }) => {
  return (
    <div className="product-wrapper">
      <div className="nes-container is-dark with-title">
        <p className="title">{product.game_title}</p>
        <img
          className="product-image"
          src={product.img_url}
          alt="ninjaturtles"
        />
        <p>Price: {product.game_price}</p>
        <p>
          Condition:
          <section className="icon-list product-icon-wrapper">
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-half heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>
          </section>
        </p>
        <button type="button" className="nes-btn is-success is-dark">
          Buy Now
        </button>{" "}
      </div>
    </div>
  );
};

export default Product;
