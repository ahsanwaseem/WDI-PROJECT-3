const Hotel = require('../models/hotel');

function hotelsCreate(req, res){
  Hotel.create(req.body.hotel, (err, hotel) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!hotel) return res.status(500).json({ success: false, message: 'Please send the correct information to create a hotel.' });
    return res.status(201).json(hotel);
  });
}

function hotelsIndex(req, res) {
  Hotel.find((err, hotels) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!hotels) return res.status(500).json({ success: false, message: 'No hotels found' });
    return res.status(200).json(hotels);
  });
}


module.exports = {
  create: hotelsCreate,
  index: hotelsIndex
};
