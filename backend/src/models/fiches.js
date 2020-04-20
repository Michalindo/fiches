const mongoose = require('mongoose');

const ficheSchema = new mongoose.Schema({
	sourceWord: {
		type: String,
    unique: true,
    
	},
});

const Fiche = mongoose.model('Fiche', ficheSchema);

module.exports = Fiche;
