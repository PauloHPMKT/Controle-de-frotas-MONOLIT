const VeicleModel = require('../models/veicle.model')

function createVeicle(req, res) {
  const { ...data } = req.body

  const veicle = new VeicleModel({ ...data })

  veicle.save()
  res.json({ veicle })
}

module.exports = {
  createVeicle,
}