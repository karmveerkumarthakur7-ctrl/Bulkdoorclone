import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image_link}
          alt={product.name}
          className="w-full h-[200px] object-contain"
        />
      </Link>

      {/* Product Name */}
      <Link to={`/product/${product.id}`}>
        <h2 className="mt-2 font-semibold text-lg">
          {product.name}
        </h2>
      </Link>

      {/* Brand */}
      <p className="text-gray-500 text-sm">
        {product.brand}
      </p>

      {/* Price */}
      <p className="font-bold mt-2">
        ₹ {product.price}
      </p>

      {/* Add To Cart */}
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 mt-3 w-full rounded"
      >
        Add To Cart
      </button>

    </div>
  );
};

export default ProductCard;