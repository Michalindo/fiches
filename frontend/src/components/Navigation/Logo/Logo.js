import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';
import { links } from '../../../shared/links';

export default function Logo() {
	return (
		<NavLink to={links.homePage} exact>
			<p className='logo'>Fiches</p>
		</NavLink>
	);
}
