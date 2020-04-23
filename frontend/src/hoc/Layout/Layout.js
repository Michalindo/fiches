import React, { Fragment } from 'react';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

export default function Layout(props) {
	return (
		<Fragment>
			<Toolbar />
			<main className='content'>{props.children}</main>
		</Fragment>
	);
}
