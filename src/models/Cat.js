const mongoose = require("mongoose");

const catShema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    age: {
        ty: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
})

const Cat = mongoose.model('Cat', catShema);

module.exports = Cat;
