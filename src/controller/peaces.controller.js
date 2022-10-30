const PeaceModel = require('../models/peaces.model')

function createPeace(req, res) {
  const { ...data } = req.body

  const peace = new PeaceModel({ ...data })

  peace.save()
  res.json({ peace })
}

module.exports = {
  createPeace,
}