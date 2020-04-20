import React, { Fragment } from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.scss';
import SearchPage from './containers/SearchPage/SearchPage';
import Layout from './hoc/Layout/Layout';

export default function App() {
	return (
		<Fragment>
			<Layout>
				<SearchPage />
			</Layout>
		</Fragment>
	);
}
