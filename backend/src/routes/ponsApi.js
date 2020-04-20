const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/dictionaries', async (req, res) => {
	const url = 'https://api.pons.com/v1/dictionaries?language=es';
	const response = await axios.get(url);
	res.status(200).send(response.data);
});

router.get('/dict/:searchTerm', async (req, res) => {
	const searchTerm = req.params.searchTerm;
	const url = `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=deen`;
	const headers = {
		'X-Secret': process.env.PONS_API_KEY,
	};
	const response = await axios.get(url, { headers: headers });
	res.status(200).send(response.data);
	console.log(process.env.PONS_API_KEY);
});

module.exports = router;
