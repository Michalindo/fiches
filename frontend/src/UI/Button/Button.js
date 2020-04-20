import React from 'react';

export default function Button(props) {
	return (
		<button onClick={props.clicked} disabled={props.disabled}>
			{props.children}
		</button>
	);
}
