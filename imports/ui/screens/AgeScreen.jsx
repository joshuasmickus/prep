import React, { Component, PropTypes } from 'react';

import ScreenWrapper from './ScreenWrapper.jsx';

import Button from '../Button.jsx';

class AgeScreen extends Component {
	constructor(props) {
		super(props);

		this._goToNextScreen = this._goToNextScreen.bind(this);
	}

	_getScreenMessage() {
		return (
			<div>
				<h1>
					Out of the following six options, which age group do you fall under?
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
		return (
			<ScreenWrapper goToNextScreen={ this._goToNextScreen } router={ this.props.router }>
				{ this._getScreenMessage() }
				<form>
					<Button className="button-left" onClick={ this._goToNextScreen }>
						18-25
					</Button>
					<Button className="button-right" onClick={ this._goToNextScreen }>
						26-31
					</Button>
					<Button className="button-left" onClick={ this._goToNextScreen }>
						32-39
					</Button>
					<Button className="button-right" onClick={ this._goToNextScreen }>
						40-47
					</Button>
					<Button className="button-left" onClick={ this._goToNextScreen }>
						48-55
					</Button>
					<Button className="button-right" onClick={ this._goToNextScreen }>
						55+
					</Button>
				</form>
			</ScreenWrapper>
		);
	}
}

AgeScreen.propTypes = {
	router: PropTypes.func.isRequired,
	shouldShow: PropTypes.bool
};
AgeScreen.defaultProps = {
	shouldShow: true
};

export default AgeScreen;