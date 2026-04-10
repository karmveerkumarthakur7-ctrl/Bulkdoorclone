import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchProducts } from "../Api/productApi";

function SearchResults() {

  const { query } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const loadProducts = async () => {

      const data = await searchProducts(query);

      setProducts(data);
    };

    loadProducts();

  }, [query]);

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Search: {query}
      </h1>

      <div className="grid grid-cols-4 gap-4">

        {products.map((item) => (

          <div key={item.id} className="border p-3 rounded">

            <img src={item.image_link} alt="" />

            <h2 className="font-semibold">{item.name}</h2>

            <p>${item.price}</p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SearchResults;