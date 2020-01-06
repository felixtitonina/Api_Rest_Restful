const express = require ("express")

const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false})) 

require('./app/controllers/index')(app);


const PORT = process.env.PORT ||  3000
app.listen(PORT, function(){
    console.log("Server is running", PORT )
}) 