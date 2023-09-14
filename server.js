const express = require('express');
const db = require('./models/database')
const employee = require('./models/employee')
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
app.get('/employees', employee.getEmployees)
app.post('/insertEmployee', employee.insertEmployee)
app.put('/updateEmployee', employee.updateEmployee)
app.delete('/deleteEmployee/:id', employee.deleteEmployee)

//DESAFIO 3
// app.get('/populate', )
// app.get('/populate', db.populate)

app.listen(3000);