import React, { Component, PropTypes } from 'react';

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
		var { shouldShow } = this.props;

		if (shouldShow) {
			return (
				<div>
					{ this._getScreenMessage() }
					<form>
						<Button className="button-left" onClick={ this._goToNextScreen(true) }>
							Yes
						</Button>
						<Button className="button-right" onClick={ this._goToNextScreen(false) }>
							No
						</Button>
					</form>
				</div>
			);
		}

		return null;
	}
}

DoYouUseScreen.propTypes = {
	shouldShow: PropTypes.bool
};

DoYouUseScreen.defaultProps = {
	shouldShow: true
};

export default DoYouUseScreen;