const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json";

// saare products
export const getAllProducts = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

// brand wise products
export const getBrandProducts = async (brand) => {
  const res = await fetch(`${API_URL}?brand=${brand}`);
  const data = await res.json();
  return data;
};

// category wise products
export const getCategoryProducts = async (category) => {
  const res = await fetch(`${API_URL}?product_type=${category}`);
  const data = await res.json();
  return data;
};

// 🔎 search products
export const searchProducts = async (query) => {
  const res = await fetch(API_URL);
  const data = await res.json();

  const filtered = data.filter((item) =>
    item.name?.toLowerCase().includes(query.toLowerCase())
  );

  return filtered;
};