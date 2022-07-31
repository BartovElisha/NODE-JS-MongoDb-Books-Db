const mongoose = require('mongoose');

// Importing the chalk module
const chalk = require('chalk');

try {
    mongoose.connect('mongodb://localhost:27017/books');
    console.log(chalk.yellow('Connected to Mongodb Server, Collection Books...'));
} 
catch (error) {
    console.log("Error: "+error);
}
finally {
    console.log(chalk.yellow("Successfully !!!"));
}

module.exports = mongoose;