import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { strings } from '../../shared/strings';
import useDebounce from '../../utils/useDebounce';
import './SearchBar.scss';
import Input from '../../UI/Input/Input';

export default function SearchBar() {
	const [query, setQuery] = useState('');
	const [data, setData] = useState({});
	const [isSearching, setIsSearching] = useState(false);

	const debouncedSearchTerm = useDebounce(query, 1000);

	useEffect(() => {
		if (debouncedSearchTerm) {
			setIsSearching(true);
			test(debouncedSearchTerm).then((res) => {
				console.log(res);
				setIsSearching(false);
				// setData(res);
			});
		} else {
			setData([]);
		}
	}, [debouncedSearchTerm]);

	return (
		<div className='searchbar'>
			<p className='searchbar-description'>{strings.searchBar.description}</p>
			<Input
				label='searchbar-label'
				className='searchbar-input'
				type='input'
				placeholder={strings.searchBar.inputPlaceholder}
				changed={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
}

async function makeApiCall(searchTerm) {
	const URL1 = `http://localhost:3001/ponsApi/dict/${searchTerm}`;
	const response = await axios.get(URL1);
	return response.data;
}

function test(searchTerm) {
	return new Promise((resolve, reject) => {
		resolve(searchTerm);
	});
}
