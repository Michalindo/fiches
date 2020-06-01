import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import SearchPage from './containers/SearchPage/SearchPage';
import Layout from './hoc/Layout/Layout';
import FichesPage from './containers/FichesPage/FichesPage'; // FlaschCard
import { links } from './shared/links';
import { Store } from './shared/store';

export default function App() {
	return (
		<Fragment>
			<Store>
				<Layout>
					<Switch>
						<Route path={links.search} component={SearchPage} />
						<Route path={links.fiches} component={FichesPage} />
						<Route path={links.homePage} component={SearchPage} />
					</Switch>
				</Layout>
			</Store>
		</Fragment>
	);
}
