// products.js
const fs = require('fs').promises
const path = require('path')

const productsFile = path.join(__dirname, 'data/full-products.json')


// products.js

/**
 * List all products
 * @returns {Promise<Array>}
 */
async function list (options = {}) {
    const { offset = 0, limit = 25 } = options
    const data = await fs.readFile(productsFile)
    console.log('lol11', data);
  
    return JSON.parse(data).slice(offset, offset + limit) // Slice the products
}

// products.js

/**
 * Get a single product
 * @param {string} id
 * @returns {Promise<object>}
 */
async function get (id) {
  const products = JSON.parse(await fs.readFile(productsFile))

  // Loop through the products and return the product with the matching id
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i]
    }
  }

   // If no product is found, return null
  return null;
}

module.exports = {
  list,
  get
}