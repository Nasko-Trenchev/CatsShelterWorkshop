const cats = require('../database/cats.json')

exports.getHomePage = (req, res) =>{

    res.render('index', {cats});
}