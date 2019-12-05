const express = require('express') //import express from 'express'
var router = express.Router()

router.get('/', async (req, res) => {    
    res.send('GET user jriejriejr ')
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

router.put('/', async (req, res) => {
    res.send('PUT user')
})
router.delete('/', async (req, res) => {
    res.send('DELETE user')
})
module.exports = router
