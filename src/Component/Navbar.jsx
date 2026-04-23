import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Navbar = () => {

const { setOpenCart, cartItems } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
//Here we can check the github changes
  // Home page pe aate hi search clear
  useEffect(() => {
    if (location.pathname === "/") {
      setSearch("");
    }
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/search/${search}`);
    }
  };

  return (
    <div className="w-full shadow-md bg-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold">
          BulkDoor
        </Link>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="flex w-[400px]">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border w-full p-2 rounded-l-md outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white px-5 rounded-r-md"
          >
            Search
          </button>

        </form>

        {/* Menu */}
        <div className="flex gap-6 text-lg items-center">

          <Link to="/" className="cursor-pointer">Home</Link>

          <p className="cursor-pointer">Products</p>

          {/* CART BUTTON */}
          <div
            className="cursor-pointer relative"
            onClick={() => setOpenCart(true)}
          >
            Cart

            {/* CART COUNT */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;