import React from "react";
import { currencyFormatter } from "../utils/formatting";

const MealItem = ({ meal }) => {
  const { name, description, price, image } = meal;
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>

        <p className="meal-item-actions">
          {" "}
          <button className="button">Add to Cart</button>
        </p>
      </article>
    </div>
  );
};

export default MealItem;
