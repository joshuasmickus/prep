import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ScreenDecider from '../imports/ui/screens/ScreenDecider.jsx';
import AgeScreen from '../imports/ui/screens/AgeScreen.jsx';
import DoYouUseScreen from '../imports/ui/screens/DoYouUseScreen.jsx';
import EthnicityScreen from '../imports/ui/screens/EthnicityScreen.jsx';
import FinishedScreen from '../imports/ui/screens/FinishedScreen.jsx';
import GenderScreen from '../imports/ui/screens/GenderScreen.jsx';
import LocationScreen from '../imports/ui/screens/LocationScreen.jsx';
import SexualityScreen from '../imports/ui/screens/SexualityScreen.jsx';
import NotFoundScreen from '../imports/ui/screens/NotFoundScreen.jsx';

import App from '../imports/ui/App.jsx';

const renderRoutes = () => (
	<Router history={ browserHistory }>
		<Route path="/" component={ ScreenDecider }>
			<Route path="age" component={ AgeScreen } />
			<Route path="do-you-use" component={ DoYouUseScreen } />
			<Route path="ethnicity" component={ EthnicityScreen } />
			<Route path="finished" component={ FinishedScreen } />
			<Route path="gender" component={ GenderScreen } />
			<Route path="location" component={ LocationScreen } />
			<Route path="sexuality" component={ SexualityScreen } />
			<Route path="*" component={ NotFoundScreen } />
		</Route>
	</Router>
);

Meteor.startup(function () {
	render(renderRoutes(), document.querySelector('.root'));
});