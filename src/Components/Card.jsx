// Card.js
import React from "react";

const Card = ({ title, text, Icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-60 text-center">
      {Icon && <div className="text-4xl text-teal-600 mb-2">{<Icon />}</div>}
      <h3 className="text-lg font-bold text-teal-600">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};

export default Card;
