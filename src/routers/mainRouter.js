const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/result', (req, res, next) => {
  res.send('Express')
})

module.exports = router
