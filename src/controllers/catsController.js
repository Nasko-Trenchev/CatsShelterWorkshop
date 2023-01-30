const catDb = require('../models/Cat');

exports.addBreedPage = (req, res) =>{

    res.render('addBreed')
}

exports.addCatPage = (req, res) =>{
    
    res.render('addCat');
}

exports.catShelterPage = (req, res) =>{

    let cat = catDb.findById(req.params.catId);
    res.render('catShelter', {cat});
}

exports.catsEditPage = (req, res) =>{

    const id = req.params.id;

    res.render('editCat', {id});
}