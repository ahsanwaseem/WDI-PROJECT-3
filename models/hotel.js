const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {type: String},
  type: {type: String},
  rating: {type: Number},
  location: {type: String},
  description: {type: String},
  hours: {type: String},
  image: {type: String},
  lat: {type: Number},
  lng: {type: Number}
},{
  timestamps: false
});

module.exports = mongoose.model('Hotel', hotelSchema);
