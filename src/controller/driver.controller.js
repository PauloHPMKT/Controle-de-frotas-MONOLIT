const DriverModel = require('../models/driver.model')

function createDriver(req, res) {
  const { ...data } = req.body
    
  const driver = new DriverModel({ ...data })
  
  driver.save()
  res.json({ driver })
}

module.exports = {
  createDriver,
}