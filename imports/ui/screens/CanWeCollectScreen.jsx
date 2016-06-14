import React, { Component, PropTypes } from 'react';

import Button from '../Button.jsx';

class CanWeCollectScreen extends Component {
	constructor(props) {
		super(props);

		this._getScreenMessage = this._getScreenMessage.bind(this);
		this._showLocationPopup = this._showLocationPopup.bind(this);
		this._goToNextScreen = this._goToNextScreen.bind(this);
	}

	_getScreenMessage() {
		return (
			<h1>
				We'd like to use your location to give us an idea of where people are, is that okay?
			</h1>
		);
	}

	_showLocationPopup(event) {
		event.preventDefault();

		return false;
	}

	_goToNextScreen(event) {
		return true;
	}

	render() {
		var { shouldShow } = this.props;

		if (shouldShow) {
			return (
				<div>
					{ this._getScreenMessage() }
					<form>
						<Button className="button-left" onClick={ this._showLocationPopup }>
							Yes
						</Button>
						<Button className="button-right" onClick={ this._goToNextScreen }>
							No
						</Button>
					</form>
				</div>
			);
		}

		return (
			<div>
				LOADS OF FUCKING SHIT
			</div>
		);
	}
}

CanWeCollectScreen.propTypes = {
	shouldShow: PropTypes.bool
};

CanWeCollectScreen.defaultProps = {
	shouldShow: true
};

export default CanWeCollectScreen;