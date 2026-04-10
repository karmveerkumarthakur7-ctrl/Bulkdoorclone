import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../Api/productApi";

const CategoryProducts = () => {

  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      const data = await getCategoryProducts(category);
      setProducts(data);
    };

    fetchProducts();

  }, [category]);

  return (

    <div className="px-10 mt-10">

      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category} Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((item) => (

          <div
            key={item.id}
            className="border p-3 rounded-lg"
          >

            <img
              src={item.image_link}
              alt={item.name}
              className="h-40 w-full object-cover"
            />

            <h3 className="text-sm mt-2">
              {item.name}
            </h3>

            <p className="text-pink-600 font-bold">
              ${item.price}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default CategoryProducts;