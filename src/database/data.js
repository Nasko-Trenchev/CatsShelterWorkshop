const mongoose = require('mongoose');

async function main(){

    mongoose.set("strictQuery", false);

    await mongoose.connect('mongodb:/127.0.0.1:27017/catShelter');

    async function saveCat(name, imageUrl, breed, description){

    }
}

async function saveCat(name, imageUrl, breed, description){

    await Cat.create({
        name,
        age,
        breed
    })
    // const cat = new Cat({
    //     name,
    //     age,
    //     breed
    // });

    await Cat.save();
}