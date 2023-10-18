export const baseUrl =
	import.meta.env.MODE !== 'development'
		? 'http://localhost:8000'
		: 'https://movie-app-velozity-xkww.vercel.app';
