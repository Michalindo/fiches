import React, { Fragment } from 'react';
import './Layout.scss';

export default function Layout(props) {
	return (
		<Fragment>
			<main className='content'>{props.children}</main>
		</Fragment>
	);
}
