const catsDb = require('../models/Cat')

exports.getHomePage = async (req, res) =>{

    const {search} = req.query;   

    let cats = await catsDb.find().lean();
    if(search){

        cats = cats.filter(cat => cat.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    res.render('index', {cats, search});
}

exports.getSearch = async (req, res) =>{

    const {search} = req.query;   

    let cats = await catsDb.find().lean();
    if(search){

        cats.filter(cat=> cat.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    res.render('index', {cats});
}