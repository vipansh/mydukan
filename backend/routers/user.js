  
const router = require('express').Router();
let Cart = require('../models/cart.model');

let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;


  const newUser = new User({username});
  const newCart = new Cart({
    username:req.body.username,
    address:{},
    cartItem:[],
  });

  newUser.save()
  .then(() => newCart.save())
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;