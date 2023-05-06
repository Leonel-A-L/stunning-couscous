const router = require('express').Router()
const places = require('../models/places')

router.get('/new', (req, res) => {
  res.render('places/new')
})



router.get('/', (req,res) => {   
    res.render('places/index', { places })
})


router.get('/:index', (req,res) => {    
  const { index } = req.params
  res.render('show', {
      place: places[index],
      index
  })
})

router.get('/:index/edit', (req,res) => {
  const { index } = req.params
  res.render('places/edit', {
      place: places[index],
      index
  })
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.delete('/:index', (req, res) => {  
  const { index } = req.params  
  places.splice(index, 1)
    res.redirect('/places')     
})

router.put('/:id', (req, res) => {
  const { index } = req.params.id 
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[index] = req.body
      res.redirect(`/places/${index}`)
  
})



module.exports = router