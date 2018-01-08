const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Here will be a list of votes' })
})

router.get('/voteId', (req, res, next) => {
  const id = req.params.voteId

  res.status(200).json({ message: `This is you vote with ID: ${id}` })
})


module.exports = router