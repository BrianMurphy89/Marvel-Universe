const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));

const marvelController = require('./controllers/marvel.js');
app.use('/home', marvelController);



const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/marvel';
mongoose.connect(mongoURI);

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})
app.listen(port, () => {
  console.log('Infinity War is coming!');
})
