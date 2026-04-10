import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "lipstick",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
  },
  {
    name: "foundation",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30"
  },
  {
    name: "mascara",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    name: "eyeliner",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
  },
  {
    name: "blush",
    image:
      "https://images.unsplash.com/photo-1607602132700-068258dd1c8f"
  },
  {
    name: "bronzer",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
  }
];

const ShopByCategory = () => {

  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="px-10 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Shop By Category
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">

        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleClick(cat.name)}
            className="cursor-pointer text-center"
          >

            <img
              src={cat.image}
              alt={cat.name}
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />

            <p className="mt-2 capitalize text-sm">
              {cat.name}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ShopByCategory;