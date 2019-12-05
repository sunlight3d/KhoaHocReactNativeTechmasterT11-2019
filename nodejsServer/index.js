/**
 * yarn add express body-parser nodemon body-parser
 * nodemon = node monitor
 */
const express = require('express') //import express from 'express'
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const userRouter = require('./routers/userRouter')
app.use('/users', userRouter)
app.listen(3000, () => {
    console.log("Start server at 3000")
})


