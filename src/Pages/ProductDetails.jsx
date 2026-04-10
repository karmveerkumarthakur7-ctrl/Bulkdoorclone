import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

const ProductDetail = () => {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 gap-10">

      {/* Product Image */}
      <div>
        <img
          src={product.image_link}
          alt={product.name}
          className="w-full"
        />
      </div>

      {/* Product Details */}
      <div>

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-gray-500 mt-2">
          Brand: {product.brand}
        </p>

        <p className="text-2xl font-bold mt-4">
          ₹ {product.price}
        </p>

        <p className="mt-4 text-gray-700">
          {product.description}
        </p>

        {/* Add To Cart */}
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 mt-6 rounded"
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
};

export default ProductDetail;