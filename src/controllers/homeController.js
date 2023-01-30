const catsDb = require('../models/Cat')

exports.getHomePage = async (req, res) =>{

    let cats = await catsDb.find().lean();
    res.render('index', {cats});
}