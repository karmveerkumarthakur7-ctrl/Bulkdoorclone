import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const CartDrawer = () => {

  const { openCart, setOpenCart, cartItems, removeFromCart } = useContext(CartContext);

  return (

    <div
      className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-lg transform transition-transform duration-300 z-50
      ${openCart ? "translate-x-0" : "translate-x-full"}`}
    >

      <div className="flex justify-between items-center p-4 border-b">

        <h2 className="text-xl font-bold">Your Cart</h2>

        <button
          onClick={() => setOpenCart(false)}
          className="text-xl"
        >
          X
        </button>

      </div>

      <div className="p-4">

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (

            <div
              key={item.id}
              className="flex gap-3 mb-4 border-b pb-3"
            >

              <img
                src={item.image_link}
                className="w-16 h-16 object-cover"
              />

              <div className="flex-1">

                <p className="font-semibold">
                  {item.name}
                </p>

                <p className="text-sm">
                  ${item.price}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>

              </div>

            </div>

          ))
        )}

      </div>

    </div>

  );
};

export default CartDrawer;