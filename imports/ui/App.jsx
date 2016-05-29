import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Location } from '../api/locationService.js';
import { ProfileService } from '../api/profileService.js';

import GeoLocation from '../ui/GeoLocation.jsx';
import Startup from '../ui/Startup.jsx';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showStartup: true,
			latitude: 0,
			longitude: 0
		}

		navigator.geolocation.getCurrentPosition((position) => {
			var { latitude, longitude } = position.coords;

			this.setState({ latitude, longitude });
		});

		setTimeout(() => {
			this.setState({ showStartup: false });
		}, 3000);
	}

	_getStartup() {
		return (<div className="root-app">
				<GeoLocation latitude={ this.state.latitude } longitude={ this.state.longitude } />
				<Startup showStartup={ this.state.showStartup } />
			</div>);
	}

	render() {
		return (
			<div className="app-container">
				{ this._getStartup() }
			</div>
		);
	}
}

export default createContainer(() => {
	return {
		profile: ProfileService.find({}).fetch()
	};
}, App);