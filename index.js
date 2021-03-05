const express = require("express")
const app = express()
const Router = require("./routes/person.routes.js")
require('dotenv').config()

const port = process.env.PORT 
app.use(Router)
/* app.get('/', (req, res)=>{
    res.send("Hel")
}) */
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})

module.exports = app