import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.scss';

export default function Toolbar() {
	return (
		<header className='header'>
			<Logo />
			<NavigationItems />
		</header>
	);
}
