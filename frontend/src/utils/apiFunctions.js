import axios from 'axios';

export async function fetchFiches(searchTerm) {
	const URL = `http://localhost:3001/ponsApi/dict/${searchTerm}`;
	const response = await axios.get(URL);
	return response.data;
}
