const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/catShelter'

async function initDatabase(){

    mongoose.set("strictQuery", false);

    await mongoose.connect(uri);
    
    console.log("Database connected");
}

module.exports = initDatabase;
