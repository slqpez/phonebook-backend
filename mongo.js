const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://slqpez:${password}@cluster0.x8sld.mongodb.net/phonebook
  `

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Person = mongoose.model('Person', noteSchema)

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
})

/* person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
}) */

Person.find({}).then(result =>{
    console.log(result)
    mongoose.connection.close()
})