const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const schema = new Schema( {
    author: String,
    title: {type: String, required: true},
    date: Number,
    image: String
})

const BooksModel = mongoose.model("books", schema);
module.exports = BooksModel;
