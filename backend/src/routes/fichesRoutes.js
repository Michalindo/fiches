const express = require('express');
const router = express.Router();
const Fiche = require('../models/Fiche');

router.get('/', async (req, res) => {
	try {
		const fiches = await Fiche.find();
		res.json(fiches);
	} catch (err) {
		res.json({ message: err });
	}
});

router.post('/', async (req, res) => {
	try {
		const fiche = new Fiche({
			searchWord: req.body.searchWord,
			results: req.body.results,
		});
		const savedFiche = await fiche.save();
		res.status(201).json(savedFiche);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/', async (req, res) => {
	const id = req.body.id;
	try {
		const removedFiche = await Fiche.deleteOne({ _id: id });
		res.json(removedFiche);
	} catch (err) {
		res.json({ message: err });
	}
});

router.patch('/', async (req, res) => {
	const id = req.body.id;
	try {
		const updatedFiche = await Fiche.updateOne(
			{ _id: id },
			{ $set: { results: req.body.results } }
		);
		res.json(updatedFiche);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
