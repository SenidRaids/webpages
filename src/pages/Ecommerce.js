// import React from 'react';
// import '../Styles/Ecommerce.css';

// const products = [
//   {
//     id: 1,
//     name: 'Smartphone X1',
//     description: 'Latest smartphone with high-resolution camera and fast processor.',
//     image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png", // Placeholder image URL
//     price: '$699.99',
//   },
//   {
//     id: 2,
//     name: 'Smartwatch Pro',
//     description: 'Stylish smartwatch with fitness tracking and notification features.',
//     image: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png", // Placeholder image URL
//     price: '$199.99',
//   },
//   {
//     id: 3,
//     name: 'Wireless Earbuds',
//     description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
//     image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png", // Placeholder image URL
//     price: '$129.99',
//   },
// ];

// const Ecommerce = () => {
//   const handleAddToCart = (product) => {
//     alert(`Added ${product.name} to cart!`);
//   };

//   return (
//     <div className="ecommerce-page">
//       <header>
//         <h1>Shop Our Mobile Gadgets</h1>
//       </header>
//       <section className="product-list">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p className="price">{product.price}</p>
//             <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Ecommerce;
import React, { useState } from 'react';
import '../Styles/Ecommerce.css';

const products = [
  {
    id: 1,
    name: 'Smartphone X1',
    description: 'Latest smartphone with high-resolution camera and fast processor.',
    image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
    price: '$699.99',
  },
  {
    id: 2,
    name: 'Smartwatch Pro',
    description: 'Stylish smartwatch with fitness tracking and notification features.',
    image: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
    price: '$199.99',
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
    image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
    price: '$129.99',
  },
];

const Ecommerce = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
    acc[product.id] = 1; // Initial quantity set to 1
    return acc;
  }, {}));

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) + change),
    }));
  };

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantities[product.id] }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: quantities[product.id] },
      ]);
    }
    alert(`Added ${quantities[product.id]} ${product.name}(s) to cart!`);
  };

  return (
    <div className="ecommerce-page">
      <header>
        <h1>Shop Our Mobile Gadgets</h1>
      </header>
      <section className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
              <span>{quantities[product.id]}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
            </div>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Ecommerce;

