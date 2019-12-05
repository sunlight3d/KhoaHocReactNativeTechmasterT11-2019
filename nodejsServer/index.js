/**
 * yarn add express body-parser nodemon body-parser
 * nodemon = node monitor
 */
const express = require('express') //import express from 'express'
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')

app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(3000, () => {
    console.log("Start server at 3000")
})


