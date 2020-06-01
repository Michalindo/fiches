import axios from 'axios';
const fichesURL = 'http://localhost:3001/fiches'; // localhost:3001 keep in config // config.js

export async function getTranslations(searchTerm) { // ficheService
	const URL = `http://localhost:3001/ponsApi/dict/${searchTerm}`;
	const response = await axios.get(URL);
	return response.data;
}

export async function fetchAllFiches() {
	const response = await axios.get(fichesURL);
	return response;
}

export async function postFiche(data) {
	await axios.post(fichesURL, data, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}

export async function deleteFiche(id) {
	await axios.delete(fichesURL, { data: { id: id } });
}

export async function patchFiche(data) {
	await axios.patch(fichesURL, data);
}
