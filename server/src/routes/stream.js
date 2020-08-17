const router = require('express').Router()
const { streamVideo, getMovies } = require('../controllers/streamController')

router.get('/stream/:video', streamVideo)
router.get('/movies', getMovies)

module.exports = router
