import { create } from 'zustand';

export const useMovieStore = create((set) => ({
	searchResults: [],
	favorites: [],
	setSearchResults: (results) => set({ searchResults: results }),
	fetchFavorites: async () => {
		try {
			const response = await fetch(`http://localhost:8000/api/movies/favorites/all`, {
				method: 'GET',
			});

			if (response.ok) {
				const favorites = await response.json();
				set({ favorites });
			} else if (response.status == 400) {
				set({ favorites: [] });
			}
		} catch (error) {
			console.error('Error fetching favorites:', error);
		}
	},
}));
