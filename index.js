import express from 'express';
var app = express();

app.get('/hello', function(req, res){
    res.json({message: 'Hello, Cognum!'})
});

app.listen(3000);