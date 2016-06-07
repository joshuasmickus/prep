import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../imports/api/locationService.js';
import '../imports/api/profileService.js';


Meteor.startup(function () {
	var root = document.createElement('div');

	root.setAttribute('id', 'root');
	document.body.appendChild(root);

	ReactDOM.render((
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
			<Route path="/" component={ HomePage } />
			<Route path="login" component={ LoginPage } />
			<Route path="*" component={ NotFoundPage } />
		</Router>
	), root);
});