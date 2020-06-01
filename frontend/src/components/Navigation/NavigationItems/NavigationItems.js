import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import { strings } from '../../../shared/strings'; // maybe name it translations
import { links } from '../../../shared/links';
import './NavigationItems.scss';

export default function navigationItems() { // upperCase
	return (
		<ul className='navigation'>
			<NavigationItem link={links.search}>
				{strings.navigationItems.search}
			</NavigationItem>
			<NavigationItem link={links.fiches}>
				{strings.navigationItems.yourFiches}
			</NavigationItem>
		</ul>
	);
}
