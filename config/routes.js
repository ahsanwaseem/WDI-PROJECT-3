const express     = require('express');
const router      = express.Router();
const auth        = require('../controllers/auth');
const hotels      = require('../controllers/hotels');
const secureRoute = require('../lib/secureRoute');


router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/hotels')
  .all(secureRoute)
  .post(hotels.create)
  .get(hotels.index);

router.route('/hotels/:id')
  .all(secureRoute)
  .get(hotels.show);


module.exports = router;
