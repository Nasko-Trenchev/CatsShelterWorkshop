const mongoose = require("mongoose");

const catShema = new mongoose.Schema({
    name: String,
    age: Number,
    imageUrl: String,
    breed: String
});

const Cat = mongoose.model('Cat', catShema);

module.exports = Cat;
