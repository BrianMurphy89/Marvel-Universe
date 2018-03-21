const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const marvelSchema = new Schema({
  img: String,
  name: String,
  location: String,
  powers: String,
  movies: String,
  dead: Boolean
})

const Marvel = mongoose.model('Marvel', marvelSchema);

module.exports = Marvel;
