import React, { Component, PropTypes } from 'react';

import Button from '../Button.jsx';

class SexualityScreen extends Component {
	constructor(props) {
		super(props);

		this._getScreenMessage = this._getScreenMessage.bind(this);
		this._showLocationPopup = this._showLocationPopup.bind(this);
		this._goToNextScreen = this._goToNextScreen.bind(this);
	}

	_getScreenMessage() {
		return (
			<div>
				<h1>
					Do you have sex with...
				</h1>
				<p>We'd like to get an idea about the age group of users of PrEP or people with an interest in PrEP.</p>
			</div>
		);
	}

	_goToNextScreen(event) {
		// TODO: Save the result in local storage and go to next screen
		return true;
	}

	render() {
		var { shouldShow } = this.props;

		if (shouldShow) {
			return (
				<div className="screen sexuality">
					{ this._getScreenMessage() }
					<form>
						<Button className="button-left" onClick={ this._goToNextScreen }>
							Men
						</Button>
						<Button className="button-right" onClick={ this._goToNextScreen }>
							Women
						</Button>
						<Button className="button-center" onClick={ this._goToNextScreen }>
							Both
						</Button>
					</form>
				</div>
			);
		}

		return null;
	}
}

SexualityScreen.propTypes = {
	shouldShow: PropTypes.bool
};

SexualityScreen.defaultProps = {
	shouldShow: true
};

export default SexualityScreen;