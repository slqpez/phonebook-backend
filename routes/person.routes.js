const express = require("express");
const router = express.Router();
const Person = require("../models/person.model.js")
const db = require("../DB/db.connection.js");



router.get('/', (req,res)=>{
    res.send(`<h1>Home</h1>`)
})

router.get('/api/persons', (req,res)=>{
    Person.find({}).then(result =>{
      res.json(result)

    })
    
})

router.get('/api/persons/:id', (req, res)=>{
  const id = req.params.id
  Person.findById(id).then(person=>{
    res.json(person)
  })
})


router.get('/info', async(req,res)=>{

  const persons = await Person.find({})
  console.log(persons)

    const length = persons.length
    const date =new Date().toString();
    res.send(`<p>Phonebook has info for ${length} people.</p>
    <p>${date}</p>`) 
})


router.delete('/api/persons/:id',(req,res)=>{
  const id = req.params.id
 Person.findByIdAndDelete(id).then(personDeleted=>{
  res.json(personDeleted)
  res.end()
 })
 
})

router.post('/api/persons/', async(req,res)=>{
  const body = req.body
  const persons = await Person.find({})
  const nameExists = persons.find(person=>person.name === body.name)
  if(!body.content){
    if(!nameExists){ 
      const person = new Person({
        name:body.name,
        number: body.number
      })
      person.save().then(person=>{
        res.json(person)
        res.status(204).end()
      })

      
    }else{
      res.status(400).send({error: "El nombre ya existe."}).end()
    }
  }else{
    res.status(400).send({error: "Faltan campos por ingresar."}).end()
  }
 
  

})

module.exports= router

