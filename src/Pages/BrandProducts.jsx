import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBrandProducts } from "../Api/productApi";

function BrandProducts() {

  const { brandName } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchBrandProducts = async () => {
      const data = await getBrandProducts(brandName);
      setProducts(data);
    };

    fetchBrandProducts();

  }, [brandName]);

  return (
    <div className="p-10 grid grid-cols-4 gap-6">

      {products.map((item) => (

        <div key={item.id} className="border p-4 rounded shadow">

          <img
            src={item.image_link}
            alt={item.name}
            className="h-40 mx-auto"
          />

          <h2 className="font-bold mt-2">
            {item.name}
          </h2>

          <p className="text-gray-500">
            Brand : {item.brand}
          </p>

          <p className="text-red-500">
            $ {item.price}
          </p>

        </div>

      ))}

    </div>
  );
}

export default BrandProducts;