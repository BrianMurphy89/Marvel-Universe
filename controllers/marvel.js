const express = require('express');
const router = express.Router();
const Marvel = require('../models/character_creation.js')

router.get('/new', (req,res) => {
  res.render('new.ejs')
})



module.exports = router;
