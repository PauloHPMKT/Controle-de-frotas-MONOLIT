const RequestModel = require('../models/rent.model')

function createRequestEvent(req, res) {
  const { ...data } = req.body

  const request = new RequestModel({ ...data })

  request.save()
  res.json({ rent })
}

module.exports = {
  createRequestEvent,
}
