const mongoose = require('mongoose');

const breedShema = mongoose.Schema({

    breed :{
        type: String,
        required: true
    }
})

const Breed = mongoose.model('Breed', breedShema);
module.exports = Breed;