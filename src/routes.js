const homeController = require("./controllers/homeController");
const catsController = require('./controllers/catsController');
const router = require("express").Router();


router.get('/', homeController.getHomePage);
router.post('/', homeController.getSearch);

router.get('/cats/add-breed', catsController.addBreedPage);
router.post('/cats/add-breed', catsController.addBreedPostPage);

router.get('/cats/add-cat', catsController.addCatPage);
router.post('/cats/add-cat', catsController.addCatPostPage);

router.get('/cat/shelter/:catId', catsController.catShelterPage);
router.post('/cat/shelter/:catId', catsController.CatShelterEditPage);

router.get('/cats/edit/:catId', catsController.catsEditPage);
router.post('/cats/edit/:catId', catsController.catsPostEditPage);

module.exports = router;