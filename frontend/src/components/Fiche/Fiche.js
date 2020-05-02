import React, { Fragment, useState, useEffect } from 'react';
import './Fiche.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { strings } from '../../shared/strings';

export default function Fiche(props) {
	const [isRotated, setIsRotate] = useState(false);

	const rotate = () => {
		if (!props.editMode) {
			setIsRotate(!isRotated);
		}
	};

	useEffect(() => {
		if (props.editMode) {
			setIsRotate(true);
		} else {
			setIsRotate(false);
		}
	}, [props.editMode]);

	const clicken = (e) => {
		e.stopPropagation();
	};

	const controlButtons = !props.editMode && (
		<div className='fiches-item-controlButtons'>
			<Button
				className='button button--small success'
				clicked={(e) => clicken(e)}
			>
				{strings.button.saveChanges}
			</Button>
			<Button
				className='button button--small danger'
				clicked={(e) => clicken(e)}
			>
				{strings.button.deleteFiche}
			</Button>
		</div>
	);

	return (
		<Fragment>
			<div className='fiches-item' onClick={() => rotate()}>
				<div className={`fiches-item-inner ${!isRotated ? 'is-rotated' : ''}`}>
					<div className='fiches-item-face fiches-item-face--front'>
						<p>{props.el.searchWord}</p>
					</div>
					<div className='fiches-item-face fiches-item-face--back'>
						{props.el.results.map((el, i) => {
							if (!el.selected) {
								return (
									<div key={i} className='fiches-item-translations'>
										<p>{el.source.replace(/\u21b5/g, '')}</p>
										<p>{el.target.replace(/\u21b5/g, '')}</p>
										<Input
											clicked={(e) => clicken(e)}
											elementType='checkbox'
											isChecked={el.selected}
											display={`${!props.editMode ? 'block' : 'none'}`}
										/>
									</div>
								);
							}
						})}
						{controlButtons}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
