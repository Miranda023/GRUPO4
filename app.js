const express = require('express');

const app = express ();

const path = require ('path');

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
    });
    

app.listen(3003, () => console.log('Esto fue exitoso'));


