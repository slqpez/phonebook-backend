const express = require("express");
const router = express.Router();
let persons = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]




router.get('/', (req,res)=>{
    res.send(`<h1>Home</h1>`)
})

router.get('/api/persons', (req,res)=>{
    res.json(persons)
})

router.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(note => note.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
router.get('/info', (req,res)=>{
    const length = persons.length
    const date =new Date().toString();
    res.send(`<p>Phonebook has info for ${length} people.</p>
    <p>${date}</p>`)
})


router.delete('/api/persons/:id',(req,res)=>{
  const id = Number(req.params.id)
  persons = persons.filter(person=> person.id !== id)
  console.log(req.params)
  res.end()
})

module.exports= router

