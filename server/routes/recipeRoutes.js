const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const lopController = require('../controllers/lopController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

// router for lop
router.get('/danh-sach-lop', lopController.danhSachLop);
router.get('/form-them-lop', lopController.formThemLop);
router.post('/them-lop', lopController.themLop);





 
module.exports = router;