const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: String,
    pageCount: {
        type: Number,
        required: true,
        validate(value) {
            if(value < 1) {
                throw new Error('Page numbers must be greater then 0');
            }
        }
    },
    publishedDate: Date,
    thumbnailUrl: String,
    status: String,
    authors: [ String ],
    categories: [ String ]
});

module.exports = mongoose.model("books", bookSchema);