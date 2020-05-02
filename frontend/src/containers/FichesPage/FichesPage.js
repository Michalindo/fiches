import React, { useState } from 'react';
import './FichesPage.scss';
import { strings } from '../../shared/strings';
import Fiche from '../../components/Fiche/Fiche';
import { exampleRes } from '../../exampleResponse';
import Input from '../../UI/Input/Input';

export default function FichesPage() {
	const [editMode, setEditMode] = useState(false);

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
			{exampleRes.map((el, i) => {
				return <Fiche key={i} el={el} editMode={editMode} />;
			})}
		</div>
	);
}
