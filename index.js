const express = require("express")
const app = express()
const Router = require("./routes/person.routes.js")
require('dotenv').config()
const morgan = require('morgan')

app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))

app.use(express.json())
const port = process.env.PORT 
app.use(Router)

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})

module.exports = app