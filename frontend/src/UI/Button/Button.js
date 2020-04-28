import React from 'react';
import './Button.scss';

export default function Button(props) {
	return (
		<button
			onClick={props.clicked}
			disabled={props.disabled}
			className={[props.className].join('button')}
			style={{ alignSelf: props.alignSelf }}
		>
			{props.children}
		</button>
	);
}
