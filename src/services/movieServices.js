const {Movies} = require('../../database/models')

const movieList = [
    {
        id: 1,
        name: "Avengers",
        year: 2012,
        completed: false,
        duration: 135
    },
    {
        id: 2,
        name: "Age of ultron",
        year: 2015,
        completed: true,
        duration: 130

    },
    {
        id: 3,
        name: "infinity war",
        year: 2018,
        completed: false,
        duration: 145
    },
    {
        id: 4,
        name: "Endgame",
        year: 2019,
        completed: true,
        duration: 180
    },
    {
        id: 5,
        name: "Kang Dynasty",
        year: 2025,
        completed: false,
        duration: 120
    },
]

const getAllMoviesServices = async () => {
    const data = await Movies.findAll()
    console.log(data);
    return data;
}

const getAllMoviesCompletedServices = async () => {
    const data = await Movies.findAll({
        where: {
            completed : true
        }
    })
    return data;
    // const temp = movieList.filter(item => item.completed === true);
    // if(temp.length > 0){
    //     return temp
    // }
    // else{
    //     return "NONE OF THE MOVIE IS COMPLETED";
    // }
}

const getAllMoviesInCompletedServices = async () => {
    const data = await Movies.findAll({
        where: {
            completed: false,
        }
    })
    return data;
    // const temp = movieList.filter(item => item.completed === false);
    // if(temp.length > 0){
    //     return temp
    // }
    // else{
    //     return "NO INCOMPLETED MOVIE"
    // }
}

const getMovieByIdServices = async (_id) => {
    const data = await Movies.findOne({
        where: {
            id: _id
        }
    })
    return data;
    // const temp =  movieList.find(item => item.id === Number(id));
    // if(temp){
    //     return temp
    // }
    // else {
    //     return "INVALID ID"
    // }
}

const addNewMovieServices = async (data) => {

    // await Movies.create({
    //     name: 'Hello',
    //     completed: true,
    //     duration: 12,
    //     year: 2001,
    // })

    await Movies.create({
        name: "Avengers",
        year: 2012,
        completed: false,
        duration: 135
    })

    console.log('created 1 row')

    movieList.push({
        ...data,
        id: movieList.length+1,
        completed: false
    })
    return movieList;
}

const updateMovieServices = (id, data) =>{
    const index = movieList.findIndex(item => item.id === Number(id));
    if (index > -1){
        movieList[index] = {...movieList[index], ...data};
    }
    else{
        res.send("INVALID ID");
    }
    return movieList;
}

const removeMovieByIdServices = (id) => {
    const index = movieList.findIndex(item => item.id === Number(id));
    (index > -1) ? movieList.splice(index, 1) : res.send("INVALID ID");
    return `task with id = ${id} has been deleted`;
}

const removeAllMoviesServices = () => {
    movieList.length = 0;
    return "list has been deleted";
}


module.exports = {
    getAllMoviesServices,
    getAllMoviesCompletedServices,
    getAllMoviesInCompletedServices,
    getMovieByIdServices,
    addNewMovieServices,
    updateMovieServices,
    removeMovieByIdServices,
    removeAllMoviesServices,
}


// app.get('/movies', (req, res) => {
//     res.send(movieList);
// })

// app.get('/movies/completed', (req, res) => {
//     const temp = movieList.filter(item => item.completed === true);
//     (temp.length > 0) ? res.send(temp) : res.send("NONE OF THE MOVIE IS COMPLETED.");
// })

// app.get('/movies/incompleted', (req, res) => {
//     const temp = movieList.filter(item => item.completed === false);
//     (temp.length > 0) ? res.send(temp) : res.send("NO INCOMPLETED MOVIE");
// })

// app.get('/movies/:id', (req, res) => {
//     const {id}  = req.params;
//     const temp =  movieList.find(item => item.id === Number(id))
//     res.send(temp === null ? "INVALID ID": temp)
// })

// app.post('/movies', (req, res) => {
//     const data = req.body;
//     movieList.push({
//         ...req.body,
//         id: movieList.length+1,
//         completed: false
//     })
//     res.send(data);
// })

// app.put('/movies/:id', (req, res) => {
//     const data = req.body;
//     const { id } = req.params;
//     const index = movieList.findIndex(item => item.id === Number(id));
//     if (index > -1){
//         movieList[index] = {...movieList[index], ...data};
//     }
//     else{
//         res.send("INVALID ID");
//     }
//     res.send(movieList);
// })

// ADD PATCH REQUEST

// app.delete('/movies/:id', (req, res) => {
//     const {id} = req.params;
//     const index = movieList.findIndex(item => item.id === Number(id));
//     (index > -1) ? movieList.splice(index, 1) : res.send("INVALID ID");
//     res.send(`task with id = ${id} has been deleted`);
// });

// app.delete('/movies', (req, res) => {
//     movieList.length = 0;
//     res.send("list has been deleted");
// });
