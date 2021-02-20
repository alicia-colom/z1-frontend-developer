import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../stylesheets/App.scss';
import MainView from './MainView';
import CamView from './CamView';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={MainView} />
			<Route exact path="/cam-view" component={CamView} />
		</Switch>
	);
}

export default App;
