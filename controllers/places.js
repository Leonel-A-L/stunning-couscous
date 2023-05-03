const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/steak-plate.jpg',
        thanks: "Alex Munsell at Unsplash"
  
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/salmon-plate.jpg',
        thanks: 'Khloe Arledge at Unsplash'
      }]
      
      router.get('/new', (req, res) => {
        res.render('places/new')
      })
            

    res.render('places/index', { places })
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router