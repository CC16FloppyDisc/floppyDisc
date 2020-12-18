import React from "react";
import axios from "axios";
import { useStripe } from "@stripe/react-stripe-js";

const Product = ({ product }) => {
  const stripe = useStripe();
  const buyNow = async () => {
    const body = {
      name: product.game_title,
      price: product.game_price,
      img: product.image_URL,
      seller_id: product.seller_stripe_id,
    };
    await axios
      .post("/api/checkout", body)
      .then(res => res.data)
      .then(session => stripe.redirectToCheckout({ sessionId: session.id }));
  };

  return (
    <div className="product-wrapper">
      <div className="nes-container is-dark with-title is-centered is-rounded">
        <p className="title">{product.game_title}</p>
        <img
          className="product-image"
          src={product.image_URL}
          alt={product.game_title}
        />
        {product.seller_name && (
          <p className="seller-name"> Seller: {product.seller_name}</p>
        )}
        <p>
          {" "}
          <i className="nes-icon coin is-small"></i> Price: ¥
          {product.game_price}
        </p>
        {product.game_condition === "S" ? (
          <section className="icon-list product-icon-wrapper">
            <p> Condition:</p>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
          </section>
        ) : product.game_condition === "A" ? (
          <section className="icon-list product-icon-wrapper">
            <p> Condition:</p>

            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-half heart"></i>
          </section>
        ) : product.game_condition === "B" ? (
          <section className="icon-list product-icon-wrapper">
            <p> Condition:</p>

            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>
          </section>
        ) : product.game_condition === "C" ? (
          <section className="icon-list product-icon-wrapper">
            <p> Condition:</p>

            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-half heart"></i>

            <i className="nes-icon is-medium is-transparent heart"></i>
          </section>
        ) : (
          <section className="icon-list product-icon-wrapper">
            <p> Condition:</p>

            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>

            <i className="nes-icon is-medium is-transparent heart"></i>

            <i className="nes-icon is-medium is-transparent heart"></i>
          </section>
        )}
        <button
          type="button"
          className="nes-btn is-success is-dark"
          onClick={() => buyNow()}
        >
          Buy Now
        </button>{" "}
      </div>
    </div>
  );
};

export default Product;
