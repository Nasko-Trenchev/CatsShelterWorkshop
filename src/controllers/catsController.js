
exports.addBreedPage = (req, res) =>{

    res.render('addBreed')
}

exports.addCatPage = (req, res) =>{
    
    res.render('addCat');
}


exports.catShelterPage = (req, res) =>{

    res.render('catShelter');
}

exports.catsEditPage = (req, res) =>{

    const id = req.params.id;

    res.render('editCat', {id});
}