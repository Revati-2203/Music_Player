const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');
var path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'/')));
app.get('/',(request,response)=>{
    readFile('./index.html','utf8',(err,html)=>{
        if(err){
            response.status(500).send('sorry, could not reach');
        }
        response.send(html);
    });
});

app.listen(process.env.PORT||3000, ()=> console.log('app avaiable on http://localhost:3000 '));