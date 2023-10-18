import { baseUrl } from '../config/api';

export const handleFavorite = async (imdbID: string, actionType: string) => {
	const data = {
		imdbID: imdbID,
		actionType: actionType,
	};
	await fetch('https://movie-app-velozity-xkww.vercel.app/api/movies/favorites', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			alert(error.message);
		});
};
