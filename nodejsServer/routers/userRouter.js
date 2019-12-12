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
        //results[0][0]
        const {id, email='', tokenKey='', expiredDate='', xx =''} = results.length > 0 && results[0].length > 0 ? results[0][0] : {}
        console.log("aaa")
    })
    // res.json({
    //     result: "ok",
    //     data: {
    //         email, password
    //     }
    // })
})

module.exports = router
