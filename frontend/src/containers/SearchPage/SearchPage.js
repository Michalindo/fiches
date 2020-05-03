import React, {
	useState,
	useEffect,
	Fragment,
	useCallback,
	useContext,
} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../UI/Button/Button';
import { strings } from '../../shared/strings';
import TranslationTable from '../../components/TranslationTable/TranslationTable';
import { fetchFiches } from '../../utils/apiFunctions';
import { Context } from '../../shared/store';

export default function SearchPage() {
	const [state] = useContext(Context);
	const [fiches, setFiches] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	useEffect(() => {
		if (state.searchQuery !== '') {
			setIsSearching(true);
			fetchFiches(state.searchQuery).then((res) => {
				setIsSearching(false);
				if (res[0]) {
					const translations = res[0].hits[0].roms[0].arabs[0].translations;
					const translationsParsed = translations.map((element) => {
						return {
							source: element.source.replace(/<\/?[^>]+>/gi, ''),
							target: element.target.replace(/<\/?[^>]+>/gi, ''),
							selected: false,
						};
					});
					setFiches(translationsParsed);
				} else {
					setFiches([]);
				}
			});
		}
	}, [state.searchQuery]);

	const checkboxClicked = useCallback(
		(element) => {
			element.selected = !element.selected;
			setFiches(fiches);
		},
		[fiches]
	);

	let translationList = (
		<Fragment>
			<TranslationTable
				fiches={fiches}
				checkboxClicked={checkboxClicked}
				isSearching
			/>
			<Button
				clicked={() => saveSelectedFiches(fiches)}
				className='button'
				alignSelf='center'
			>
				{strings.button.saveSelectedFiches}
			</Button>
		</Fragment>
	);

	if (isSearching) {
		translationList = <div>Loading...</div>;
	}

	return (
		<Fragment>
			<SearchBar />
			{translationList}
		</Fragment>
	);
}

const saveSelectedFiches = (fiches) => {
	console.log(fiches);
};
