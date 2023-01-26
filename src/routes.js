const homeController = require("./controllers/homeController");
const catsController = require('./controllers/catsController');
const router = require("express").Router();


router.get('/', homeController.getHomePage);

router.get('/cats/add-breed', catsController.addBreedPage);

router.get('/cats/add-cat', catsController.addCatPage);

router.get('/cat/shelter/:id', catsController.catShelterPage);

router.get('/cats/edit/:id', catsController.catsEditPage);

module.exports = router;