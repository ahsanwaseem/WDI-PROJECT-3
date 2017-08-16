const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/config');
const Hotel = require('../models/hotel');

mongoose.connect(dbURI);

Hotel.collection.drop();

const hotelData = [{
  name: 'Hilton',
  type: 'big',
  rating: 4,
  location: 'London',
  description: 'Hello',
  hours: '24',
  image: 'http://www3.hilton.com/resources/media/hi/BUEHIHH/en_US/img/shared/full_page_image_gallery/main/hh_exteriornight_3_675x359_FitToBoxSmallDimension_Center.jpg'
},{
  name: 'Hilton2',
  type: 'big2',
  rating: 42,
  location: 'London2',
  description: 'Hello2',
  hours: '242',
  image: 'http://www3.hilton.com/resources/media/hi/FRAHAHI/en_US/img/shared/full_page_image_gallery/main/HL_hotelextng002_2_1270x560_FitToBoxSmallDimension_Center.jpg'
}];

Hotel
  .create(hotelData)
  .then(hotels => console.log(`${hotels.length} hotels created, great!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
