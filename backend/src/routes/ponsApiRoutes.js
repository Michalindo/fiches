const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/dictionaries', async (req, res) => {
	const url = 'https://api.pons.com/v1/dictionaries?language=es'; // api.pons.com/v1
	const response = await axios.get(url);
	res.status(200).send(response.data);
});

router.get('/dict/:searchTerm', async (req, res) => {
	const searchTerm = encodeURI(req.params.searchTerm); // const
	const url = `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=depl&in=pl`;
	console.log(url);
	const headers = {
		'X-Secret': process.env.PONS_API_KEY, // missing env file
	};
	const response = await axios.get(url, { headers });
	res.status(200).send(response.data);
	console.log(process.env.PONS_API_KEY);
});

module.exports = router;
