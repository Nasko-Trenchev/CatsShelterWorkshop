const mongoose = require("mongoose");

const catShema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        },
    breed: {
        type: String,
        required: true
    }
})

const Cat = mongoose.model('Cat', catShema);

module.exports = Cat;
