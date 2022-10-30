const TrafficFineModel = require('../models/traffic_fine.model')

function createInfration(req, res) {
  const { ...data } = req.body

  const infration = new TrafficFineModel({ ...data })

  infration.save()
  res.json({ infration })
}

module.exports = {
  createInfration,
}