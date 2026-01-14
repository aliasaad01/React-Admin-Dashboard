import { useState } from "react";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";
import { useStateContext } from "../contexts/contextProvider";

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      qty: 1,
      image: "/src/data/product4.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 80,
      qty: 2,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    },
    {
      id: 3,
      name: "Sun Glasses",
      price: 25,
      qty: 2,
      image: "/src/data/product2.jpg",
    },
  ]);

  const increaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const total = subtotal;

  return (
    <div className="fixed inset-0 z-50 dark:text-gray-200">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => handleClick("cart")}
      />

      {/* Cart */}
      <div
        className="absolute right-0 top-0 h-full w-[300px] md:w-[400px]
                  bg-white dark:bg-secondary-dark-bg
                  shadow-2xl transform transition-transform duration-300
                  translate-x-0"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={() => handleClick("cart")}
            className="p-1 hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-full transition-all"
          >
            <MdClose className="text-xl text-gray-500 dark:text-gray-200" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-220px)]">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-gray-100 dark:bg-main-dark-bg p-3 rounded-xl"
            >
              <img
                src={item.image}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ${item.price} each
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-1 rounded bg-gray-200 dark:bg-gray-700"
                  >
                    <MdRemove />
                  </button>

                  <span className="font-semibold">{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-1 rounded bg-gray-200 dark:bg-gray-700"
                  >
                    <MdAdd />
                  </button>
                </div>
              </div>

              <p className="font-semibold">${item.price * item.qty}</p>
            </div>
          ))}
        </div>

        {/* Subtotal + Total + Checkout */}
        <div className="p-4 border-t dark:border-gray-700 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
            <span className="font-medium">${subtotal}</span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            style={{ backgroundColor: currentColor }}
            className="w-full mt-3 py-3 rounded-xl text-white font-semibold
                      hover:opacity-90 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
