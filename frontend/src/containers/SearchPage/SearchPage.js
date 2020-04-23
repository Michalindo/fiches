import React, { useState, useEffect, Fragment } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as data from '../../dummyResponse';
import Button from '../../UI/Button/Button';
import { strings } from '../../shared/strings';

export default function SearchPage() {
	const [fiches, setfiches] = useState([]);
	const selectedFiches = [];

	const translations = data.default[0].hits[0].roms[0].arabs[0].translations;
	const translationsParsed = translations.map((element) => {
		return {
			source: element.source.replace(/<\/?[^>]+>/gi, ''),
			target: element.target.replace(/<\/?[^>]+>/gi, ''),
		};
	});

	useEffect(() => {
		setfiches(translationsParsed);
	}, []);

	return (
		<Fragment>
			<SearchBar />
			<ul>
				{fiches.map((element, index) => {
					return (
						<li key={index} style={{ display: 'flex' }}>
							<p>{element.source}</p>
							<p>{element.target}</p>
							<div
								style={{ width: '15px', height: '15px', background: 'red' }}
								onClick={() => {
									if (selectedFiches.indexOf(element) === -1) {
										selectedFiches.push(element);
									} else {
										const index = selectedFiches.indexOf(element);
										selectedFiches.splice(index, 1);
									}
								}}
							></div>
						</li>
					);
				})}
			</ul>
			<Button clicked={() => saveSelectedFiches(selectedFiches)} disabled>
				{strings.button.saveSelectedFiches}
			</Button>
		</Fragment>
	);
}

const saveSelectedFiches = (selectedFiches) => {
	console.log(selectedFiches);
};
