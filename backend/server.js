require('dotenv').config();
const port = process.env.PORT || 8000;

const express = require('express');
const cors = require('cors');
const searchRoute = require('./Routes/search.route');
const favoriteRoute = require('./Routes/favorite.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies/search', searchRoute);
app.use('/api/movies/favorites', favoriteRoute);

const favoriteMovies = [];

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
