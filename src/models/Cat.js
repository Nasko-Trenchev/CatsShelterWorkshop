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

catShema.statics.deleteById = function(_id) {
    return this.deleteOne({ _id: _id })
  };

const Cat = mongoose.model('Cat', catShema);

module.exports = Cat;
