import React, { Component, PropTypes } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import CanWeCollectScreen from './CanWeCollectScreen.jsx';

export default AppContainer = createContainer(({ params }) => {
	const { shouldShow } = params;

	return {
		shouldShow
	};
}, CanWeCollectScreen);