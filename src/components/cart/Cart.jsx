import { useState } from "react";
import watch1 from "../../images/watch1.jpg"; // Import your images
import watch2 from "../../images/watch2.jpg";
import watch3 from "../../images/watch3.jpg";
import watch4 from "../../images/watch4.jpg";
import watch5 from "../../images/watch5.jpg";
import watch6 from "../../images/watch6.jpg";

const Cart = () => {
  // Define a state variable to store the items in the cart
  const [cart, setCart] = useState([]);

  // Define an array of items that are available
  const items = [
    { id: 1, name: "ROLEX", price: "$11199", image: watch1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "PATECH PHILIP", price: "$13149", image: watch2, description: "Sed do eiusmod tempor incididunt ut labore et dolore m." },
    { id: 3, name: "RAYMOD", price: "$11249", image: watch3, description: "Sed do eiusmod tempor incididunt ut labore et dolore m." },
    { id: 4, name: "CARTER", price: "$13199", image: watch4, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
    { id: 5, name: "RADO", price: "$13199", image: watch5, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
    { id: 6, name: "TOMMY", price: "$13199", image: watch6, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
  ];

  // Function to remove an item from the cart
  const handleRemoveFromCart = (itemId) => {
    // Update the cart by filtering out the item with the specified itemId
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Cart</h1>

      <ul className="space-y-2 text-black">
        {cart.map((item) => (
          <li
            key={item.id}
            className="border border-black p-3 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-400">Price: {item.price}</p>
                {/* You can add more details here */}
              </div>
            </div>
        
          </li>
        ))}
      </ul>
      <ul className="space-y-2 text-white">
        {items.map((item) => (
          <li
            key={item.id}
            className="border p-3 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-400">Price: {item.price}</p>
                {/* You can add more details here */}
              </div>
            </div>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
