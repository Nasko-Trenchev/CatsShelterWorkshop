const Cat = require('../models/Cat');
const Breed = require('../models/Breed');

exports.addBreedPage = (req, res) =>{
    res.render('addBreed')
}

exports.addBreedPostPage = async (req, res) =>{

    const {breed} = req.body;

    const newBreed = new Breed({breed});
    await newBreed.save();

    res.redirect('/');
}

exports.addCatPage = async (req, res) =>{

    let breeds = await Breed.find().lean();
    res.render('addCat', {breeds});
}

exports.addCatPostPage = async (req, res) =>{
    const {name, imageUrl, breed, description} = req.body;

    let cat = new Cat({name, imageUrl, breed, description});

    await cat.save();

    res.redirect('/');
}

exports.catShelterPage = async (req, res) =>{

    let cat = await Cat.findById(req.params.catId).lean();
    res.render('catShelter', {cat});
}

exports.catsEditPage = async (req, res) =>{
    let cat = await Cat.findById(req.params.catId).lean();
    let breeds = await Breed.find().lean();
    res.render('editCat', {cat, breeds});
}

exports.catsPostEditPage = async (req, res) =>{

    let cat = await Cat.findById(req.params.catId);

    const {name, description, imageUrl, breed} = req.body;
    cat.name = name;
    cat.description = description;
    cat.breed = breed;
    await cat.save();
    res.redirect('/');
}