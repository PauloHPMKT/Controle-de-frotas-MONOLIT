const bcrypt = require('bcrypt')

class Encript {
  static async EncodePass(pass) {
    const salt = await bcrypt.genSalt()

    return await bcrypt.hash(pass, salt)
  }

  static async ComparePassword(pass, userPass) {
    return await bcrypt.compare(pass, userPass)
  }
}

module.exports = {
  Encript,
}