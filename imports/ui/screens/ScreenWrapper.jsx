import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Navigation } from 'react-router';

import Button from '../Button.jsx';

class ScreenWrapper extends Component {
	constructor(props) {
		super(props);

		this._goToPreviousScreen = this._goToPreviousScreen.bind(this);
		this._goToNextScreen = this._goToNextScreen.bind(this);
	}

	_goToPreviousScreen() {
		this.context.router.goBack();
	}

	_goToNextScreen() {
		this.props.goToNextScreen();
	}

	render() {
		return (
			<div className="screen-wrapper">
				<div className="bar-top">
					<Button	className="button-back" onClick={ this._goToPreviousScreen }>◀</Button>
				</div>
				<div class="screen-content">
					{ React.createElement('div', ...this.props) }
				</div>
				<div className="bar-bottom">
					<Button className="button-next" onClick={ this._goToNextScreen }>▶</Button>
				</div>
			</div>
		);
	}
}

ScreenWrapper.propTypes = {
	goToNextScreen: PropTypes.func,
	router: PropTypes.func.isRequired
};

ScreenWrapper.defaultProps = {
	goToNextScreen: () => {}
};

export default ScreenWrapper;