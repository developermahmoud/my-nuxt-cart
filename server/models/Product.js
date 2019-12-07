const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://mahmoud:admin123@ds253398.mlab.com:53398/my-cart-app',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  category: String
})
const Product = mongoose.model('product', productSchema);


exports.index = () => {
  return Product.find({})
}