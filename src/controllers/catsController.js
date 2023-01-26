const cats = require('../database/cats.json');

exports.addBreedPage = (req, res) =>{

    res.render('addBreed')
}

exports.addCatPage = (req, res) =>{
    
    res.render('addCat');
}


exports.catShelterPage = (req, res) =>{

    let currentCat = cats.find(cat => cat.id == req.params.id);
    res.render('catShelter', {currentCat});
}

exports.catsEditPage = (req, res) =>{

    const id = req.params.id;

    res.render('editCat', {id});
}