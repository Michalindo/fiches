import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import SearchPage from './containers/SearchPage/SearchPage';
import Layout from './hoc/Layout/Layout';

export default function App() {
	return (
		<div>
			<Layout>
				<Router>
					<Switch>
						<Route path='/' component={SearchPage} />
						<Route path='/' component={SearchPage} />
					</Switch>
				</Router>
			</Layout>
		</div>
	);
}
