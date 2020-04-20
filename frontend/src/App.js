import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import * as data from './dummyResponse';

function App() {
	const translations = data.default[0].hits[0].roms[0].arabs[0].translations;
	console.log('App -> translations', translations);
	const translationsParsed = translations.map((element) => {
		return {
			source: element.source.replace(/<\/?[^>]+>/gi, ''),
			target: element.target.replace(/<\/?[^>]+>/gi, ''),
		};
	});

	return (
		<div className='App'>
			<SearchBar />
			{translationsParsed.map(element => {
				return <p>{element.source} : {element.target}</p>
			})}
		</div>
	);
}

export default App;
