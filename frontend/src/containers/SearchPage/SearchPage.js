import React, {
	useState,
	useEffect,
	Fragment,
	useCallback,
	useContext,
} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as data from '../../dummyResponse';
import Button from '../../UI/Button/Button';
import { strings } from '../../shared/strings';
import TranslationList from '../../components/TranslationTable/TranslationTable';

import { Context } from '../../shared/store';

import axios from 'axios';

export default function SearchPage() {
	const [state] = useContext(Context);

	const [fiches, setFiches] = useState([]);
	const [isSearching, setIsSearching] = useState(false);


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

	useEffect(() => {
		if (state.searchQuery !== '') {
			// makeApiCall(state.searchQuery).then((res) => {
			// 	setIsSearching(true);
			// 	console.log(res);
			// });
		}
	}, [state.searchQuery]);

	const checkboxClicked = useCallback(
		(element) => {
			element.selected = !element.selected;
			setFiches(fiches);
		},
		[fiches]
	);

	return (
		<Fragment>
			<SearchBar />
			<TranslationList fiches={fiches} checkboxClicked={checkboxClicked} />
			<Button
				clicked={() => saveSelectedFiches(fiches)}
				className='button'
				alignSelf='center'
			>
				{strings.button.saveSelectedFiches}
			</Button>
			<p>{state.searchQuery}</p>
		</Fragment>
	);
}

const saveSelectedFiches = (fiches) => {
	console.log(fiches);
};

async function makeApiCall(searchTerm) {
	const URL1 = `http://localhost:3001/ponsApi/dict/${searchTerm}`;
	const response = await axios.get(URL1);
	return response.data;
}
