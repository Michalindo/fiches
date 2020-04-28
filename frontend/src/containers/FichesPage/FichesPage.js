import React, { useState } from 'react';
import './FichesPage.scss';
import { strings } from '../../shared/strings';
import Button from '../../UI/Button/Button';
import Fiche from '../../components/Fiche/Fiche';
import { exampleRes } from '../../exampleResponse';

export default function FichesPage() {
	const [editMode, setEditMode] = useState(false);

	return (
		<div className='fiches'>
			<div className='fiches-heading'>
				<h1 className='fiches-header'>{strings.fichesList.howTo}</h1>
				<Button
					className='button'
					alignSelf='flex-end'
					clicked={() => setEditMode(!editMode)}
				>
					{strings.button.edit}
				</Button>
			</div>
			{exampleRes.map((el, i) => {
				return <Fiche key={i} el={el} editMode={editMode}/>;
			})}
		</div>
	);
}
