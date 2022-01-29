var express = require('express');
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, '/public/css')));

app.get("/add", express.urlencoded({extended : false }) ,function(req, res) {
    let firstNumber = parseFloat(req.query.first);
    let secondNumber =  parseFloat(req.query.second);
    let operation = req.query.operation;
    console.log(firstNumber, secondNumber, operation);
    let result;
    switch (operation) {
        case "plus":
            result = firstNumber + secondNumber; 
            break;
        case "minus":
            result = firstNumber - secondNumber; 
            break;
        case "multiply":
            result = firstNumber * secondNumber; 
            break;
        case "devide":
            result = firstNumber / secondNumber; 
            break;
    }
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p>The sum is :${String(result)} </p>
        <a href = "/"> Home </a>
    </body>
    </html>
    `);
    res.end();
} )

app.use("/", function (req, res) {
    res.writeHead(200, {"Content-type" : "text/html"});
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="style.css" type="text/css" rel="stylesheet" />
        <title>Simple Calculator</title>
    </head>
    <body>
        <form action="http://localhost:8080/add/">
            <div>
                Enter fistNumber
                <input type="text" name="first"><br>
                Enter secondNumber
                <input type="text" name="second"><br>
                <select name="operation" id="operation">
                    <option value="plus">Add</option>
                    <option value="multiply">Multiply</option>
                    <option value="minus">Substract</option>
                    <option value="devide">Deide</option>
                </select>
                <input type="submit" value="click">
            </div>
        </form>
    </body>
    </html>
    `);
    res.end();
});

app.listen(8080, ()=>{
    console.log("Server has been started at port 8080");
})