import React, { Component, PropTypes } from 'react';

class Startup extends Component {
	render() {
		if (this.props.showStartup) {
			return (
				<div className="overlay startup">
					Welcome to the PrEP App
				</div>
			);
		}

		return null;
	}
}

Startup.propTypes = {
	showStartup: PropTypes.bool
};

export default Startup;