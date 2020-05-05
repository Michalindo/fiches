import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.scss'


export default function NavigationItem(props) {
	return (
		<li className='navigation-item'>
			<NavLink
				className="navigation-link"
				to={props.link}
				activeClassName='active'
				exact={props.exact}
			>
				{props.children}
			</NavLink>
		</li>
	);
}
