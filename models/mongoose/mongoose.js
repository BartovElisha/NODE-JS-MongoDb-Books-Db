const mongoose = require('mongoose');
const booksDb = require('./bookSchema');


try {
    mongoose.connect('mongodb://localhost:27017/books');
    console.log('Connected to Mongodb Server, Collection Books...');

    //DisplayNumOfBooksInLib();
} 
catch (error) {
    console.log("Error: "+error);
}
finally {
    console.log("Successfully !!!");
}

// CRUD operations
// Create

// Read
async function DisplayNumOfBooksInLib() {
    result = await booksDb.find({});

    console.log("Number of Books in Library is: "+result.length);

    return result.length;
}

DisplayNumOfBooksInLib();

// Update

// Delete

module.exports = mongoose;