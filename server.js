const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('testando novo projeto')
})


const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})