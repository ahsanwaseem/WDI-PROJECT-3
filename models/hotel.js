const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {type: String},
  type: {type: String},
  rating: {type: Number},
  location: {type: String},
  description: {type: String},
  hours: {type: String},
  image: {type: String}
},{
  timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);
