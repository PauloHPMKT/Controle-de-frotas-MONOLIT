const app = require('./src/app')

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`)
})