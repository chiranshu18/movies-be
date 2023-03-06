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

const getAllMoviesControllers = (req, res) => {
    const allMovies = getAllMoviesServices();
    res.send(allMovies);
}

const getAllMoviesCompletedControllers = (req, res) => {
    const allCompletedMovies = getAllMoviesCompletedServices();
    res.send(allCompletedMovies);
}

const getAllMoviesInCompletedControllers = (req, res) => {
    const allInCompletedMovies = getAllMoviesInCompletedServices();
    res.send(allInCompletedMovies);
}

const getMovieByIdControllers = (req, res) => {
    const {id} = req.params;
    const movieById = getMovieByIdServices(id);
    res.send(movieById);
}

const addNewMovieControllers = (req, res) => {
    const data = req.body;
    const newMovie = addNewMovieServices(data)
    res.send(newMovie);
}

const updateMovieControllers = (req, res) => {
    const data = req.body;
    const {id} = req.params;
    const updatedMovie = updateMovieServices(id, data)
    res.send(updatedMovie);
}

const removeMovieByIdControllers = (req, res) => {
    const {id} = req.params;
    const removedMovie = removeMovieByIdServices(id);
    res.send(removedMovie);
}

const removeAllMoviesControllers = (req, res) => {
    const removeAllMovies = removeAllMoviesServices();
    res.send(removeAllMovies);
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