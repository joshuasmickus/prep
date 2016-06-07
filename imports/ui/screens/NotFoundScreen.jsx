import React, { Component, PropTypes } from 'react';

import Button from '../Button.jsx';

class NotFoundScreen extends Component {
	constructor(props) {
		super(props);
	}

	getDefaultProps() {
		return {
			shouldShow: false
		}
	}

	_goToNextScreen(event) {
		// TODO: Save the result in local storage and go to next screen
		return true;
	}

	render() {
		var { shouldShow } = this.props;

		if (shouldShow) {
			return (
				<div className="screen not-found">
					OMG NOT FOUND!
				</div>
			);
		}

		return null;
	}
}

NotFoundScreen.propTypes = {
	shouldShow: PropTypes.bool
};

export default NotFoundScreen;