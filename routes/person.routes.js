const express = require("express");
const router = express.Router();


router.get('/', (req,res)=>{
    res.send(`<a>Vínculo</a>`)
})

module.exports= router

