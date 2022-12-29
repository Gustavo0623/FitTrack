require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const {Sequelize} = require('sequelize')
const defineCurrentUser = require('./middleware/defineCurrentUser');


//middleware

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT",],
    credentials: true,
}))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(defineCurrentUser)

/* This code was used to test the connection. 
connection will be on the backen */

// const sequelize = new Sequelize(process.env.PG_URI)


// try {
//     sequelize.authenticate()
//     console.log(`Connect to SQL DB at ${process.env.PG_URI}`)
// } catch (err){
//     console.log(`unable to connect to PG: ${err}`)
// }


//Controllers
app.use('/authentication',require('./controllers/authentication'))
app.use('/users',require('./controllers/users'))

//Listen
app.listen(process.env.PORT,()=>{
    console.log(`App running on port ${process.env.PORT}`)
})