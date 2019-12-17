const express = require('express') //import express from 'express'
var router = express.Router()
const connection = require('../database/database')

router.get('/', async (req, res) => {    
    res.send('GET user jriejriejr ')
})
//http:localhost:3000/users/register
router.post('/register', async (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || 
                    req.connection.remoteAddress || 
                    req.socket.remoteAddress ||
                    (req.connection.socket ? req.connection.socket.remoteAddress : null);
    debugger
    const {email = '', password = ''} = req.body    
    const {tokenkey = ''} = req.headers
    const sqlCommand = "CALL registerUser(?, ?)"
    connection.query(sqlCommand, [email, password], (error, results, field) => {
        debugger
        if(error != null){
            res.json({
                result: "failed",
                data: {}, 
                message: error.sqlMessage
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
