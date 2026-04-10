import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../Api/productApi";

function BrandSection() {

  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchBrands = async () => {
      const products = await getAllProducts();

      const uniqueBrands = [
        ...new Set(products.map((p) => p.brand))
      ];

      setBrands(uniqueBrands);
    };

    fetchBrands();

  }, []);

  const goToBrand = (brand) => {
    navigate(`/brand/${brand}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {brands.map((brand) => (
        <div
          key={brand}
          onClick={() => goToBrand(brand)}
          className="border p-6 text-center cursor-pointer hover:shadow-lg capitalize"
        >
          {brand}
        </div>
      ))}

    </div>
  );
}

export default BrandSection;