require('dotenv').config();

const express = require('express')
const app = express()


app.get('/', (request, response) => {
 response.send('<h1>Hi ExpressJS!</h1>')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
})