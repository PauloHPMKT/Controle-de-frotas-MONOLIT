const RentModel = require('../models/rent.model')

function createRentEvent(req, res) {
  const { ...data } = req.body

  const rent = new RentModel({ ...data })

  rent.save()
  res.json({ rent })
}

module.exports = {
  createRentEvent,
}
