const MaintenanceModel = require('../models/maintenance.model')

function createMaintenance(req, res) {
  const { ...data } = req.body

  const maintenance = new MaintenanceModel({ ...data })

  maintenance.save()
  res.json({ maintenance })
}

module.exports = {
  createMaintenance,
}