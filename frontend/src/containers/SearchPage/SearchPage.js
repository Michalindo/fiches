import React, { useState, useEffect, Fragment, useCallback } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as data from '../../dummyResponse';
import Button from '../../UI/Button/Button';
import { strings } from '../../shared/strings';
import TranslationList from '../../components/TranslationTable/TranslationTable';

export default function SearchPage() {
	const [fiches, setFiches] = useState([]);
	const [selectedFiches, setSelectedFiches] = useState([]);

	const translations = data.default[0].hits[0].roms[0].arabs[0].translations;
	const translationsParsed = translations.map((element) => {
		return {
			source: element.source.replace(/<\/?[^>]+>/gi, ''),
			target: element.target.replace(/<\/?[^>]+>/gi, ''),
			selected: false,
		};
	});

	useEffect(() => {
		setFiches(translationsParsed);
	}, []);

	const checkboxClicked = useCallback(
		(element) => {
			if (selectedFiches.indexOf(element) === -1) {
				selectedFiches.push(element);
			} else {
				const index = selectedFiches.indexOf(element);
				selectedFiches.splice(index, 1);
			}
			setSelectedFiches(selectedFiches);
		},
		[selectedFiches]
	);

	return (
		<Fragment>
			<SearchBar />
			<TranslationList fiches={fiches} checkboxClicked={checkboxClicked} />
			<Button clicked={() => saveSelectedFiches(selectedFiches)} className="button" alignSelf="center">
				{strings.button.saveSelectedFiches}
			</Button>
		</Fragment>
	);
}

const saveSelectedFiches = (selectedFiches) => {
	console.log(selectedFiches);
};
