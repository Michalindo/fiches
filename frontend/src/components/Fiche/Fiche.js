import React, { Fragment, useState, useEffect } from 'react';
import './Fiche.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { strings } from '../../shared/strings';
import { patchFiche } from '../../utils/apiFunctions';

export default function Fiche(props) {
	const [isRotated, setIsRotate] = useState(false);
	const [fiche, setFiche] = useState(props.el);

	const rotate = () => {
		if (!props.editMode) {
			setIsRotate(!isRotated);
		}
	};

	const updatedData = {
		id: fiche._id,
		results: fiche.results,
	};

	useEffect(() => {
		if (props.editMode) {
			setIsRotate(true);
		} else {
			setIsRotate(false);
		}
	}, [props.editMode]);

	const handleClick = (e) => {
		e.stopPropagation();
	};

	const changeSelected = (e, el) => {
		e.stopPropagation();
		el.selected = !el.selected;
		setFiche({
			...fiche,
			results: [...fiche.results],
			selected: [fiche.results.selected, el.selected],
		});
		console.log(updatedData.results);
	};

	const updateFiche = (e, data) => {
		e.stopPropagation();
		patchFiche(data);
	};

	const removeFiche = (e, id) => {
		e.stopPropagation();
		props.deleteFiche(id);
	};

	const controlButtons = props.editMode && (
		<div className='fiches-item-controlButtons'>
			<Button
				className='button button--small success'
				clicked={(e) => updateFiche(e, updatedData)}
			>
				{strings.button.saveChanges}
			</Button>
			<Button
				className='button button--small danger'
				clicked={(e) => removeFiche(e, props.el._id)}
			>
				{strings.button.deleteFiche}
			</Button>
		</div>
	);

	return (
		<Fragment>
			<div className='fiches-item' onClick={() => rotate()}>
				<div className={`fiches-item-inner ${isRotated ? 'is-rotated' : ''}`}>
					<div className='fiches-item-face fiches-item-face--front'>
						<p>{fiche.searchWord}</p>
					</div>
					<div className='fiches-item-face fiches-item-face--back'>
						{fiche.results
							.filter((el) => {
								return !props.editMode ? el.selected : el;
							})
							.map((el, i) => {
								return (
									<div key={i} className='fiches-item-translations'>
										<p>{el.source.replace(/\u21b5/g, '')}</p>
										<p>{el.target.replace(/\u21b5/g, '')}</p>
										<Input
											clicked={(e) => changeSelected(e, el)}
											elementType='checkbox'
											isChecked={el.selected}
											display={`${props.editMode ? 'block' : 'none'}`}
										/>
									</div>
								);
							})}
						{controlButtons}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
