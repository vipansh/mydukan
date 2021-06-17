const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  username: { type: String, required: true },
  address: { type: Object, required: true },
  cartItem: { type: Array, required: true },
}, {
  timestamps: true,
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
