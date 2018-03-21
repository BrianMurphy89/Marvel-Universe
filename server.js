const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));

app.listen(port, () => {
  console.log('Infinity War is coming!');
})
