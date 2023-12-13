// ecommerceRoutes.js

const express = require('express');
const router = express.Router();

// Simulated Database (In reality, this would connect to a database)
const products = [
  { id: 1, name: 'Product 1', price: 25 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 40 }
];

// Route for displaying products
router.get('/products', (req, res) => {
  res.json(products);
});

// Route for adding a product to the cart (simulated cart)
router.post('/cart/add/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const selectedProduct = products.find(product => product.id === productId);
  if (selectedProduct) {
    // Simulated cart addition (In reality, this would update the user's cart)
    res.send(`Added ${selectedProduct.name} to the cart.`);
  } else {
    res.status(404).send('Product not found.');
  }
});

// Route to view product details by ID
router.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  // Find the product by ID (dummy logic)
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    res.status(404).send('Product not found');
    return;
  }
  res.json(product); // Sending product details as JSON
});

// Route for user authentication
router.post('/login', (req, res) => {
  // Simulated login logic (In reality, this would validate user credentials)
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials.');
  }
});

module.exports = router;
