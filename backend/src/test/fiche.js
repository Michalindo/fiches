/* eslint-disable no-undef */
// const mongoose = require('mongoose');
const Fiche = require('../models/Fiche');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('Fiches', () => {
	beforeEach((done) => {
		Fiche.remove({}, (err) => {
			done();
		});
	});

	describe('/GET fiche', () => {
		it('it should GET all fiches', (done) => {
			chai
				.request(server)
				.get('/fiches')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(0);
					done();
				});
		});
	});

	describe('POST fiche', () => {
		it('it should POST a fiche', (done) => {
			const fiche = {
				searchWord: 'Jablko',
				results: [{ source: 'Jablko', target: 'Apfel', selected: true }],
			};

			chai
				.request(server)
				.post('/fiches')
				.send(fiche)
				.end((err, res) => {
					res.should.have.status(201);
					res.body.should.be.a('object');
					res.body.should.have.property('searchWord');
					res.body.should.have.property('searchWord').eql('Jablko');
					res.body.should.have.property('results');
					res.body.results.should.be.a('array');
					done();
				});
		});
	});
});
