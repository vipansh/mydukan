const router = require('express').Router();
let Cart = require('../models/cart.model');

router.route('/').get((req, res) => {
  Cart.find()
    .then(Carts => res.json(Carts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const address = req.body.address;
  const cartItem = req.body.cartItem;
  const date = Date.parse(req.body.date);

  const newCart = new Cart({
    username,
    address,
    cartItem,
    date,
  });

  newCart.save()
  .then(() => res.json('Cart added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Cart.find({username:req.params.id})
    .then(Cart => res.json(Cart))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Cart.findByIdAndDelete(req.params.id)
    .then(() => res.json('Cart deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Cart.find({username:req.params.id})
    .then(cart => {
      cart.username = req.body.username;
      cart.address = req.body.address;
      cart.cartItem = req.body.cartItem;
      cart.date = Date.parse(req.body.date);

      cart.save()
        .then(() => res.json('Cart updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;