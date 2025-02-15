const mongoose = require('mongoose');
const Product = require('./models/Product'); // Ensure this is correct relative path

mongoose.connect('mongodb://localhost:27017/home_automation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Products = [
  { 
    name: "Smart Light Bulb", 
    description: "Energy-efficient smart bulb that can be controlled via mobile apps.", 
    category: "Lighting", 
    price: 25.99, 
    image: "http://example.com/smart-light.jpg" 
  },
  { 
    name: "Smart Plug", 
    description: "Control your appliances remotely from anywhere.", 
    category: "Power", 
    price: 19.99, 
    image: "http://example.com/smart-plug.jpg" 
  },
  { 
    name: "Smart Thermostat", 
    description: "Control the temperature of your home remotely.", 
    category: "Climate", 
    price: 99.99, 
    image: "http://example.com/smart-thermostat.jpg" 
  }
];

async function seedProducts() {
  try {
    await Product.deleteMany({});  // Ensure products are cleared
    await Product.insertMany(products);  // Insert new products
    console.log('Products added to the database!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

seedProducts();
