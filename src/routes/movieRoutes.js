const express = require('express');
const router = express.Router();
const {
    getAllMoviesControllers,
    getAllMoviesCompletedControllers,
    getAllMoviesInCompletedControllers,
    getMovieByIdControllers,
    addNewMovieControllers,
    updateMovieControllers,
    removeMovieByIdControllers,
    removeAllMoviesControllers
} = require('../controllers/movieControllers')

// GET
router.route('/').get(getAllMoviesControllers);
router.route('/completed').get(getAllMoviesCompletedControllers);
router.route('/incompleted').get(getAllMoviesInCompletedControllers);
router.route('/:id').get(getMovieByIdControllers);

// POST
router.route('/').post(addNewMovieControllers);

// PUT
router.route('/:id').put(updateMovieControllers);

// DELETE
router.route('/:id').delete(removeMovieByIdControllers);
router.route('/').delete(removeAllMoviesControllers);

module.exports = router