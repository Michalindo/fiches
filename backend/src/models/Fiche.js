const mongoose = require('mongoose');

const FicheSchema = new mongoose.Schema({
	searchWord: {
		type: String,
		unique: true,
		required: true,
	},
	results: [{ source: String, target: String, selected: Boolean }],
});

const Fiche = mongoose.model('Fiche', FicheSchema);

module.exports = Fiche;
