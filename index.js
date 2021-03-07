const express = require("express")
const app = express()
const Router = require("./routes/person.routes.js")
require('dotenv').config()
const morgan = require('morgan')

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));


app.use(express.json())
const port = process.env.PORT 
app.use(Router)

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})

module.exports = app