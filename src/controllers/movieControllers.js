const {
    getAllMoviesServices,
    getAllMoviesCompletedServices,
    getAllMoviesInCompletedServices,
    getMovieByIdServices,
    addNewMovieServices,
    updateMovieServices,
    removeMovieByIdServices,
    removeAllMoviesServices,
} = require('../services/movieServices')

const getAllMoviesControllers = async (req, res) => {
    const allMovies = await getAllMoviesServices();
    res.json(allMovies);
}

const getAllMoviesCompletedControllers = async (req, res) => {
    const allCompletedMovies = await getAllMoviesCompletedServices();
    res.json(allCompletedMovies);
}

const getAllMoviesInCompletedControllers = async (req, res) => {
    const allInCompletedMovies = await getAllMoviesInCompletedServices();
    res.json(allInCompletedMovies);
}

const getMovieByIdControllers = async (req, res) => {
    const {id} = req.params;
    const movieById = await getMovieByIdServices(id);
    res.json(movieById);
}

const addNewMovieControllers = async (req, res) => {
    const data = req.body;
    const newMovie = await addNewMovieServices(data)
    res.json(newMovie);
}

const updateMovieControllers = async (req, res) => {
    const data = req.body;
    const {id} = req.params;
    const updatedMovie = await updateMovieServices(id, data)
    res.json(updatedMovie);
}

const removeMovieByIdControllers = async (req, res) => {
    const {id} = req.params;
    const removedMovie = await removeMovieByIdServices(id);
    res.json(removedMovie);
}

const removeAllMoviesControllers = async (req, res) => {
    const removeAllMovies = await removeAllMoviesServices();
    res.json(removeAllMovies);
}

module.exports = {
    getAllMoviesControllers,
    getAllMoviesCompletedControllers,
    getAllMoviesInCompletedControllers,
    getMovieByIdControllers,
    addNewMovieControllers,
    updateMovieControllers,
    removeMovieByIdControllers,
    removeAllMoviesControllers
}