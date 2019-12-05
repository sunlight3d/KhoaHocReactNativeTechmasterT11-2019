const express = require('express') //import express from 'express'
var router = express.Router()

router.get('/', async (req, res) => {    
    res.send('GET PRODUCT jriejriejr ')
})

router.post('/', async (req, res) => {
    debugger
    const {email, password} = req.body    
    res.json({
        result: "ok",
        data: {
            email, password
        }
    })
})

module.exports = router
