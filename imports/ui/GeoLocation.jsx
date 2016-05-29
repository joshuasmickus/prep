import React, { Component, PropTypes } from 'react';

class GeoLocation extends Component {
	render() {
		return (
			<div className="geolocation">
				Latitude: { this.props.latitude }<br />
				Longitude: { this.props.longitude }
			</div>
		);
	}
}

GeoLocation.propTypes = {
	latitude: PropTypes.number,
	longitude: PropTypes.number,
};

export default GeoLocation;