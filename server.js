const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
    console.log(__dirname);
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let num1 =Number(request.body.num1);
    let num2 =Number(request.body.num2);
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    console.send(`${num1} + ${num2} = ${result}`);
})

app.listen(3000,function (){
    console.log('Server is running on Port 3000');
});