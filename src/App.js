import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuItem from "./components/MenuItem";
import MenuHeader from "./components/MenuHeader";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: "Gyoza",
    description: "Japanese dumplings",
    imageName: "gyoza.png",
    price: 5.99,
  },
  {
    id: 2,
    title: "Sushi",
    description: "Japanese rice rolls",
    imageName: "sushi.png",
    price: 6.99,
  },
  {
    id: 3,
    title: "Ramen",
    description: "Japanese noodle soup",
    imageName: "ramen.png",
    price: 7.99,
  },
  {
    id: 4,
    title: "Matcha Cake",
    description: "Japanese green tea cake",
    imageName: "matcha-cake.png",
    price: 4.99,
  },
  {
    id: 5,
    title: "Mochi",
    description: "Japanese rice cake",
    imageName: "mochi.png",
    price: 3.99,
  },
  {
    id: 6,
    title: "Yakitori",
    description: "Japanese skewered chicken",
    imageName: "yakitori.png",
    price: 2.99,
  },
  {
    id: 7,
    title: "Takoyaki",
    description: "Japanese octopus balls",
    imageName: "takoyaki.png",
    price: 5.99,
  },
  {
    id: 8,
    title: "Sashimi",
    description: "Japanese raw fish",
    imageName: "sashimi.png",
    price: 8.99,
  },
  {
    id: 9,
    title: "Okonomiyaki",
    description: "Japanese savory pancake",
    imageName: "okonomiyaki.png",
    price: 6.99,
  },
  {
    id: 10,
    title: "Katsu Curry",
    description: "Japanese curry with fried pork",
    imageName: "katsu-curry.png",
    price: 9.99,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartItems
      .map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity > 0);

    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleOrderClick = () => {
    if (cartItems.length === 0) {
      alert("No items in cart.");
    } else {
      const orderDetails = cartItems
        .map((item) => `${item.title}: ${item.quantity}`)
        .join("\n");
      alert(
        `Order Placed!\n\n${orderDetails}\n\nTotal: $${calculateTotal().toFixed(
          2
        )}`
      );
      clearCart();
    }
  };

  return (
    <div>
      <div className="mt-3">
        <MenuHeader />
      </div>
      <div className="mt-4 pt-3">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imageName={item.imageName}
            addToCart={() => addItemToCart(item)}
            removeFromCart={() => removeItemFromCart(item.id)}
            quantity={
              (cartItems.find((cartItem) => cartItem.id === item.id) || {})
                .quantity || 0
            }
          />
        ))}
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-5 d-flex justify-content-center">
          <p className="mb-0">Subtotal: ${calculateTotal().toFixed(2)}</p>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="finalize-button" onClick={handleOrderClick}>
            Order
          </button>
        </div>
        <div className="col d-flex justify-content-start">
          <button className="finalize-button" onClick={clearCart}>
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
