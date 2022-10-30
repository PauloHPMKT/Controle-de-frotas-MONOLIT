const DeptModel = require('../models/dept.model')

async function createDept(req, res) {
  const { ...data } = req.body

  const dept = new DeptModel({ ...data })

  dept.save()
  res.json({ dept })
}

module.exports = {
  createDept,
}