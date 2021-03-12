const mongoose = require('mongoose')

require('dotenv').config()
const url = process.env.DB_URL
  

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(result =>{
    console.log("Database connected")
}).catch(err=>{
    console.log(`Can't connect with database. ${err}`)
})

module.exports = mongoose