const mongoose = require('./models/mongoose/mongoose');

const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname,'/templates/views') 
app.set('views', viewsPath)

// Main index.ejs page
app.get("" , (req, res) => {    
    res.render("index");
});

// get methode
app.get("/books/:pages" , (req, res) => {
    //console.log(req.params.pages);
    

    res.render("books",{pages: req.params.pages});
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
    console.log(`Server is up on port ${PORT}...`);
});