const router = require('express').Router()
const Score = require('./../db/score')

router.get('/', async (req, res, next) => {
  try {
    const scores = await Score.findAll({
      order: [['score', 'DESC']]
    })
    res.json(scores)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const scores = await Score.findAll({
      order: [['score', 'ASC']]
    })

    await Score.update(
      {
        score: req.body.score,
        name: req.body.name
      },
      {
        where: {
          score: scores[0].score
        }
      }
    )
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

module.exports = router
