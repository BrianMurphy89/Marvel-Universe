const express = require('express');
const router = express.Router();
const Marvel = require('../models/character_creation.js')

router.get('/new', (req,res) => {
  res.render('new.ejs')
})

router.post('/', (req,res) => {
  if(req.body.dead === 'on'){
    req.body.dead = true;
  } else {
    req.body.dead = false;
  }
  Marvel.create(req.body, () => {
    res.redirect('/marvel-home')
  })
})

router.get('/', (req,res) => {
  Marvel.find({}, (error,allCharacters) => {
    res.render('index.ejs' , {
      marvel: allCharacters
    })
  })
})

router.delete('/:id' , (req,res) => {
  Marvel.findByIdAndRemove(req.params.id, (err,data) => {
    res.redirect('/marvel-home')
  })
})

router.get('/:id', (req,res) => {
  Marvel.findById(req.params.id, (err,foundCharacter) => {
    res.render('show.ejs', {
      marvel: foundCharacter
    })
  })
})

router.get('/:id/edit' , (req,res) => {
  Marvel.findById(req.params.id, (err,foundCharacter) => {
    res.render('edit.ejs', {
      marvel: foundCharacter
    })
  })
})

router.put('/:id', (req,res) => {
  if(req.body.dead === 'on'){
    req.body.dead = true;
  } else {
    req.body.dead = false;
  }
  Marvel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCharacter) => {
    res.redirect('/marvel-home')
  })
})


module.exports = router;
