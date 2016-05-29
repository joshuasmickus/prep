App.info({
	id: 'com.diablito.prep',
	name: 'PrEP',
	description: 'PrEP App',
	author: 'Diablito',
	email: 'joshua.anderson688@gmail.com',
	website: 'http://diablito.uk'
});

// Set up resources such as icons and launch screens.
// App.icons({
	// 'iphone': 'icons/icon-60.png',
	// 'iphone_2x': 'icons/icon-60@2x.png'
// });

// App.launchScreens({
	// 'iphone': 'splash/Default~iphone.png',
	// 'iphone_2x': 'splash/Default@2x~iphone.png'
// });

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

// Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
	// APP_ID: '1234567890',
	// API_KEY: 'supersecretapikey'
// });