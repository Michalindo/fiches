import React, { Fragment } from 'react';
import './FichesPage.scss';
import { strings } from '../../shared/strings';
import Button from '../../UI/Button/Button';

export default function FichesPage() {
	return (
		<div className="fiches-heading">
			<h1 className="fiches-header">{strings.fichesList.howTo}</h1>
			<Button className='button' alignSelf='flex-end'>
				{strings.button.edit}
			</Button>
		</div>
	);
}
