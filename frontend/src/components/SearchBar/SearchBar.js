import React, { useEffect, useState, useContext } from 'react';
import useDebounce from '../../utils/useDebounce';
import Input from '../../UI/Input/Input';
import { strings } from '../../shared/strings';
import { Context } from '../../shared/store';
import './SearchBar.scss';

export default function SearchBar() {
	const [, dispatch] = useContext(Context);
	const [query, setQuery] = useState('');

	const debouncedSearchTerm = useDebounce(query, 1000);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch({ type: 'updateSearchQuery', payload: debouncedSearchTerm });
		}
	}, [debouncedSearchTerm, dispatch]);

	return (
		<div className='searchbar'>
			<p className='searchbar-description'>{strings.searchBar.description}</p>
			<Input
				label='searchbar-label'
				className='searchbar-input'
				type='input'
				placeholder={strings.searchBar.inputPlaceholder}
				changed={(e) => setQuery(e.target.value.toLowerCase())}
			/>
		</div>
	);
}
