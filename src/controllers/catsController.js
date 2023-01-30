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

exports.addCatPage = (req, res) =>{
    res.render('addCat');
}

exports.addCatPostPage = async (req, res) =>{
    const {name, imageUrl, breed, description} = req.body;

    let cat = new Cat({name, imageUrl, breed, description});

    await cat.save();

    res.redirect('/');
}

exports.catShelterPage = (req, res) =>{

    let cat = Cat.findById(req.params.catId);
    res.render('catShelter', {cat});
}

exports.catsEditPage = async (req, res) =>{

    let cat = await Cat.findById(req.params.catId).lean();
    res.render('editCat', {cat});
}
