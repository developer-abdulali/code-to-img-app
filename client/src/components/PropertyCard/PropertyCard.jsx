import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`../properties/${card?.id}`)}
      className="flexColStart r-card"
    >
      <img src={card?.image} alt="home" />
      <Heart id={card?.id} />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card?.price}</span>
      </span>
      <span className="primaryText">
        {truncate(card?.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card?.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
