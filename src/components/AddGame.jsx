import React, { useState } from "react";
import axios from "axios";

const AddGame = ({ userInfo }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [condition, setCondition] = useState();

  const handleTitle = event => {
    setTitle(event.target.value);
  };
  const handlePrice = event => {
    setPrice(event.target.value);
  };
  const handleImageUrl = event => {
    setImageUrl(event.target.value);
  };
  const handleCondition = event => {
    setCondition(event.target.value);
  };

  const postItem = () => {
    axios
      .post("/items", {
        image_URL: imageUrl,
        game_price: price,
        game_title: title,
        game_condition: condition,
        seller_stripe_id: userInfo.stripe_id,
      })
      .then(res => res.data);
  };

  return (
    <div className="add-game-wrapper">
      <form onSubmit={() => postItem()}>
        <i class="nes-logo"></i>
        <label htmlFor="title_field">Game Title</label>

        <input
          id="name_field"
          type="text"
          className="nes-input is-dark"
          placeholder="Game Title"
          onChange={handleTitle}
        />

        <i className="nes-icon coin "></i>
        <label htmlFor="price_field">Price</label>

        <input
          id="price_field"
          type="text"
          className="nes-input is-dark "
          placeholder="Price"
          onChange={handlePrice}
        />

        <label htmlFor="img_field">Image Url</label>

        <input
          id="img_field"
          type="text"
          className="nes-input is-dark is-success"
          placeholder="Image Url"
          onChange={handleImageUrl}
        />

        <div class="nes-select is-dark">
          <label htmlFor="dark_select">Condition of Game</label>
          <select required id="dark_select" onChange={handleCondition}>
            <option value="" disabled selected hidden>
              Select Condition
            </option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddGame;
