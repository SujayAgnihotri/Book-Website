const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const mainerouts = require('./routs/mainrout')

// ejs tamplate engine setup
app.set('view engine','ejs')
app.use(express.static('static'))

//main routers setup
app.use(mainerouts)

port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`server is ready on port : ${port}`);
})