import React, { Fragment } from 'react';
import './Input.scss';

export default function Input(props) {
	let inputElement = null;

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={props.className}
					value={props.value}
					onChange={props.changed}
					placeholder={props.placeholder}
				/>
			);
			break;
		case 'checkbox':
			inputElement = (
				<input
					className={props.className}
					type='checkbox'
					onClick={props.clicked}
					defaultChecked={props.isChecked}
				/>
			);
			break;
		default:
			inputElement = (
				<input
					className={props.className}
					value={props.value}
					onChange={props.changed}
					placeholder={props.placeholder}
				/>
			);
	}

	return (
		<Fragment>
			<label className={props.className}>{props.label}</label>
			{inputElement}
		</Fragment>
	);
}
