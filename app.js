const express = require("express");
const mongoose = require('./models/mongoose/mongoose');

// Importing the chalk module
const chalk = require('chalk');

// Coloring different text messages
// console.log(chalk.green("Welcome to Tutorials Point"));
// console.log(chalk.red.underline("Welcome to Tutorials Point"));
// console.log(chalk.red.underline.bold("Welcome to Tutorials Point"));
// console.log(chalk.red('Hello world!!! 🎉🎉🎉'));


const BooksDb = require('./models/db/bookSchema');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

//---------- My Middleware 
app.use(function(req, res, next) {
    console.log(chalk.blue(`Middleware Method: ${req.method}`));
    console.log(chalk.blue(`Middleware url: ${req.url}`));

    next();
});
//---------- My Middleware 

const viewsPath = path.join(__dirname,'/templates/views') 
app.set('views', viewsPath)

// Main index.ejs page
app.get("" , (req, res) => {    
    res.render("index");
});

// get methode
app.get("/books/:pages" ,async (req, res) => {
    let result = await BooksDb.find({});
    let booksArray = [];

    // forEach version - Preffered
    result.forEach((element,index) => {
        if(element.pageCount >= req.params.pages) {
            booksArray.push(element);
        }
    });
    // Regular for version
    // for(let i = 0;i < result.length;i++) {
    //     if(result[i].pageCount >= req.params.pages) {
    //         booksArray.push(result[i]);
    //     } 
    // }
    console.log(`Number of Books in Library is: ${result.length}`);
    console.log(`Number of Books in Library with pages above ${req.params.pages} is: ${booksArray.length}`);
    
    res.send(booksArray);
});

// get methode
app.get("/about" , (req, res) => {
    res.render("aboutUs");
});

// Send Test Message to Client
app.get("/test" , (req, res) => {    
    res.send('<h1>Welcome to site from Server, test Pass...</h1>');
});

// Page 404
// app.get('*', (req, res) => { 
//     res.redirect(303,"/") })

app.listen(PORT, () => {
    console.log(chalk.greenBright(`Server is up on port ${PORT}...`));
});