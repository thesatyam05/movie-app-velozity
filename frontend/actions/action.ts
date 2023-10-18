export const handleFavorite = async (imdbID: string, actionType: string) => {
	const data = {
		imdbID: imdbID,
		actionType: actionType,
	};
	await fetch('http://localhost:8000/api/movies/favorites', {
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
