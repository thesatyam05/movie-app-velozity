const axios = require('axios');

const favoriteMovies = [];

const omdbApiKey = process.env.OMDB_API_KEY;

const getFavorite = async (req, res, next) => {
	const dataArr = [];
	try {
		if (favoriteMovies.length === 0) {
			return res.status(400).json({ error: 'No favorite movies' });
		}
		await Promise.all(
			favoriteMovies.map(async (id) => {
				const resp = await axios.get(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${id}`);
				dataArr.push(resp.data);
			})
		);
		res.json(dataArr);
	} catch (error) {
		console.error('Error searching for movies:', error);
	}
};

const modifyFavorite = async (req, res, next) => {
	const { imdbID, actionType } = req.body;

	if (!imdbID || !actionType || (actionType !== 'add' && actionType !== 'remove')) {
		return res.status(400).json({ error: 'Invalid request data.' });
	}

	if (actionType === 'add') {
		if (!favoriteMovies.includes(imdbID)) {
			favoriteMovies.push(imdbID);
		}
	} else if (actionType === 'remove') {
		const index = favoriteMovies.findIndex((movie) => movie === imdbID);
		if (index !== -1) {
			favoriteMovies.splice(index, 1);
		}
	}

	res.status(200).json({ message: 'Done' });
};

module.exports = {
	getFavorite,
	modifyFavorite,
};
