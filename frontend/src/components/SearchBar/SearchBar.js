import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { strings } from '../../shared/strings';
import useDebounce from '../../utils/useDebounce';
import './SearchBar.scss';

export default function SearchBar() {
	const [query, setQuery] = useState('');
	const [data, setData] = useState({});
	const [isSearching, setIsSearching] = useState(false);

	const debouncedSearchTerm = useDebounce(query, 1000);

	// useEffect(() => {
	// 	if (debouncedSearchTerm) {
	// 		setIsSearching(true);
	// 		makeApiCall(debouncedSearchTerm).then((res) => {
	// 			setIsSearching(false);
	// 			setData(res);
	// 		});
	// 	} else {
	// 		setData([]);
	// 	}
	// }, [debouncedSearchTerm]);

	return (
		<div>
			<input
				className='searchbar'
				placeholder={strings.searchBar.inputPlaceholder}
				// onChange={(e) => setQuery(e.target.value, 500)}
			/>
		</div>
	);
}

async function makeApiCall(searchTerm) {
	const URL1 = `http://localhost:3001/ponsApi/dict/${searchTerm}`;
	const response = await axios.get(URL1);
	return response.data;
}
