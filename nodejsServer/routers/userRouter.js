const express = require('express') //import express from 'express'
var router = express.Router()
const connection = require('../database/database')

router.get('/', async (req, res) => {    
    res.send('GET user jriejriejr ')
})
//http:localhost:3000/users/register
router.post('/register', async (req, res) => {
    debugger
    const {email = '', password = ''} = req.body    
    const {tokenkey = ''} = req.headers
    const sqlCommand = "CALL loginUser(?, ?)"
    connection.query(sqlCommand, [email, password], (error, results, field) => {
        debugger
        if(error != null){
            res.json({
                result: "failed",
                data: {}, 
                message: JSON.stringify(error)
            })
            return
        }
        if(results[0][0]) {
            res.json({
                result: "ok",
                data: results[0][0]
            })
        } else {
            res.json({
                result: "failed",
                data: {}, 
                message: "Data is blank"
            })
            return
        }                        
    })
    
})

module.exports = router
