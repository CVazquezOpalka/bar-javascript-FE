import React from "react";
import { Link } from "react-router-dom";

function BrandCard({ data }) {
  const { id, name, img, description } = data;
  return (
    <div className="bg-withe border shadow-xl py-10 px-3 text-center font-semibold w-80 mb-4">
      <div
        className={`h-32 w-32 overflow-hidden shadow-xl rounded-full mb-2 mx-auto `}
      >
        <img  src={img.url} alt="logo" />
      </div>
      <h1 className="text-lg text-gray-700 mb-4">{name}</h1>
      <p className="text-sm text-gray-400 mt-4 mb-8">{description}</p>
      <Link
        to={`/product/${id}`}
        className="bg-primary px-8 py-2 text-gray-100 hover:bg-secondary uppercase"
      >
        Visit Store
      </Link>
    </div>
  );
}

export default BrandCard;
