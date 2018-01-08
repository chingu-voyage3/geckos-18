const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Here will be a list of votes' })
})

router.get('/:voteId', (req, res, next) => {
  const id = req.params.voteId

  res.status(200).json({ message: `This is you vote with ID: ${id}` })
})

router.post('/', (req, res, next) => {
  const vote = {
    _id: req.body.voteId,
    topic: req.body.topic,
    description: req.body.description
  }

  console.log(vote)
  res.status('201').json({
    message: "Vote as been created",
    vote: vote
  })
})

router.patch('/:voteId', (req, res, next) => {
  const id = req.params.voteId

  res.status(200).json({
    message: `Successfully updated vote with ID: ${id}`
  })
})

router.delete('/:voteId', (req, res, next) => {
  const id = req.params.voteId

  res.status(200).json({
    message: `Successfully deleted vote with ID: ${id}`
  })
})


module.exports = router