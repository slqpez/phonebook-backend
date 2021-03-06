const express = require("express");
const router = express.Router();
const persons = [
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
    res.send(`<a>Vínculo</a>`)
})

router.get('/api/persons', (req,res)=>{
    res.json(persons)
})

module.exports= router

