const express = require('express'); //express package 
const https = require('https'); //https package
const bodyParser = require('body-parser'); //body-parser to recive input from html
const { response } = require('express');


const app = express(); //app
const port = 3000; //port number that runs the server

app.use(bodyParser.urlencoded({extended: true})); //line needed to run body-parser
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => { //.get to send html file

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    // if(currentDay > 6 && currentDay < 6){
    //     day = "weekday!";
    // } else {
    //     day = "weekend!";
    // };

    switch(currentDay){
        case 0: day = "Sunday"
            break;
        case 1: day = "Monday"
            break;
        case 2: day = "Tuesday"
            break;
        case 3: day = "Wednesday"
            break;
        case 4: day = "Thursday"
            break;
        case 5: day = "Friday"
            break;
        case 6: day = "Saturday"
            break;
        default:
        console.log("Something wrong with currentDay: " + currentDay);
    }

    res.render("list", {typeOfDay: day});
});



app.listen(port, () => {

    console.log("Server is up");
});