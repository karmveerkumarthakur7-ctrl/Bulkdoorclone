import { useEffect, useState } from "react";
import { getAllProducts } from "../Api/productApi";

import HeroSlider from "../Component/HeroSlider";
import ShopByCategory from "../Component/ShopByCategory";
import ProductCard from "../Component/ProductCard";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      const data = await getAllProducts();

      console.log("Products:", data); // debugging

      setProducts(data);

    } catch (error) {

      console.log("Error fetching products:", error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div>

      {/* HERO BANNER */}
      <HeroSlider />

      {/* SHOP BY CATEGORY */}
      <ShopByCategory />

      {/* SHOP BY BRAND */}
      {/* <ShopByBrand /> */}

      {/* ALL PRODUCTS */}
      <div className="px-10 mt-12">

        <h2 className="text-2xl font-bold mb-6">
          All Products
        </h2>

        {loading ? (

          <div className="text-center text-lg">
            Loading products...
          </div>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((item) => (

              <ProductCard
                key={item.id}
                product={item}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Home;