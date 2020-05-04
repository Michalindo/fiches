import axios from 'axios';

export async function getTranslations(searchTerm) {
	const URL = `http://localhost:3001/ponsApi/dict/${searchTerm}`;
	const response = await axios.get(URL);
	return response.data;
}

export async function fetchAllFiches() {}

export async function postFiche(data) {
	const URL = 'http://localhost:3001/fiches';
	await axios.post(URL, data, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
	
}
