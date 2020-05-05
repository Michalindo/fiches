import React, { useState, useEffect } from 'react';
import './FichesPage.scss';
import { strings } from '../../shared/strings';
import Fiche from '../../components/Fiche/Fiche';
import Input from '../../UI/Input/Input';

import {
	fetchAllFiches,
	deleteFiche,
} from '../../utils/apiFunctions';

export default function FichesPage() {
	const [editMode, setEditMode] = useState(false);
	const [fiches, setFiches] = useState([]);
	const [isFetchingFiches, setIsFetchingFiches] = useState(false);

	useEffect(() => {
		setIsFetchingFiches(true);
		fetchAllFiches().then((res) => {
			if (res.status === 200) {
				setFiches(res.data);
				setIsFetchingFiches(false);
			} else {
				setFiches([]);
				setIsFetchingFiches(false);
			}
		});
	}, []);

	const removeFiche = (id) => [
		deleteFiche(id),
		setFiches(fiches.filter((el) => el._id !== id)),
	];

	return (
		<div className='fiches'>
			<div className='fiches-heading'>
				<h1 className='fiches-header'>{strings.fichesList.howTo}</h1>
				<Input
					elementType='switch'
					label='switch'
					clicked={() => setEditMode(!editMode)}
				/>
			</div>
			{!isFetchingFiches &&
				fiches.map((el, i) => {
					return (
						<Fiche
							key={i}
							el={el}
							editMode={editMode}
							deleteFiche={removeFiche}
						/>
					);
				})}
		</div>
	);
}
