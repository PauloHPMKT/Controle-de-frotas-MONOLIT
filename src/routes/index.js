const router = require('express').Router()

router.get('/', (req, res) => {
  return res.render('index.html')
})

module.exports = router