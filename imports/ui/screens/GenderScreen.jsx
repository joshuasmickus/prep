import React, { Component, PropTypes } from 'react';

import Button from '../Button.jsx';

class LocationScreen extends Component {
	constructor(props) {
		super(props);
	}

	getDefaultProps() {
		return {
			shouldShow: false
		}
	}

	_getScreenMessage() {
		return (
			<div>
				<h1>
					Do you identify as...
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
				<div className="screen gender">
					{ this._getScreenMessage() }
					<form>
						<Button className="button-left" onClick={ this._goToNextScreen }>
							Male
						</Button>
						<Button className="button-right" onClick={ this._goToNextScreen }>
							Female
						</Button>
						<Button className="button-left" onClick={ this._goToNextScreen }>
							Trans (MTF)
						</Button>
						<Button className="button-right" onClick={ this._goToNextScreen }>
							Trans (FTM)
						</Button>
						<Button className="button-left" onClick={ this._goToNextScreen }>
							Not Sure
						</Button>
						<Button className="button-right" onClick={ this._goToNextScreen }>
							Other
						</Button>
					</form>
				</div>
			);
		}

		return null;
	}
}

LocationScreen.propTypes = {
	shouldShow: PropTypes.bool
};

export default LocationScreen;