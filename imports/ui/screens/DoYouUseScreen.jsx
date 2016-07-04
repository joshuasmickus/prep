import React, { Component, PropTypes } from 'react';

import ScreenWrapper from './ScreenWrapper.jsx';

import Button from '../Button.jsx';

class DoYouUseScreen extends Component {
	constructor(props) {
		super(props);

		this._getScreenMessage = this._getScreenMessage.bind(this);
		this._showLocationPopup = this._showLocationPopup.bind(this);
		this._goToNextScreen = this._goToNextScreen.bind(this);
	}

	_getScreenMessage() {
		return (
			<h1>
				Do you currently use PrEP?
			</h1>
		);
	}

	_showLocationPopup(event) {
		event.preventDefault();

		return false;
	}

	_goToNextScreen(doesUse) {
		return function () {
			// go to Next Screen
			return doesUse;
		};
	}

	render() {
		return (
			<ScreenWrapper router={ this.props.router }>
				{ this._getScreenMessage() }
				<form>
					<Button className="button-left" onClick={ this._goToNextScreen(true) }>
						Yes
					</Button>
					<Button className="button-right" onClick={ this._goToNextScreen(false) }>
						No
					</Button>
				</form>
			</ScreenWrapper>
		);
	}
}

DoYouUseScreen.propTypes = {
	router: PropTypes.func.isRequired
};

export default DoYouUseScreen;