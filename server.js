const express = require('express');
const db = require('./config/database')
const bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//DESAFIO 1
app.get('/hello', function(req, res){
    res.json({message: 'Hello, Cognum!'})
});

//DESAFIO 2
app.get('/employees', db.getEmployees)
app.post('/insertEmployee', db.insertEmployee)
app.put('/updateEmployee', db.updateEmployee)
app.delete('/deleteEmployee/:id', db.deleteEmployee)

app.listen(3000);