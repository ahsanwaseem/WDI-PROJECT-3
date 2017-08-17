const Hotel = require('../models/hotel');

function hotelsCreate(req, res){
  Hotel.create(req.body, (err, hotel) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!hotel) return res.status(500).json({ success: false, message: 'Please send the correct information to create a hotel.' });
    return res.status(201).json(hotel);
  });
}

function hotelsIndex(req, res, next) {
  Hotel
    .find()
    .exec()
    .then((hotels) => res.json(hotels))
    .catch(next);
}

function hotelsShow(req, res, next) {
  Hotel
    .findById(req.params.id)
    .exec()
    .then((hotel) => {
      if(!hotel) return res.notFound();
      res.json(hotel);
    })
    .catch(next);
}

module.exports = {
  create: hotelsCreate,
  index: hotelsIndex,
  show: hotelsShow
};
