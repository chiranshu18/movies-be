const express = require('express');
const app = express();
app.use(express.json());

const movieRouter = require('./src/routes/movieRoutes');
app.use('/movies', movieRouter);


app.listen(3000, () => {
    console.log("server is running on port 3000");
})