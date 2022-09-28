var express = require("express")
var app = express()
// // var MongoClient = require('mongodb').MongoClient

// // MongoClient.url('mongodb://localhost:27017/task', (err, db) => {
//   if (err) throw err

//   db.collection('users').find().toArray((err, result) => {
//     if (err) throw err

//     console.log(result)
//   })
// })
app.set("view engine","ejs")
app.use(express.json())

var userRouter=require('./routes/users')
app.use('/users',userRouter)
app.listen(3000)