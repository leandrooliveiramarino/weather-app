const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		//Code goes here
	});
}

geocodeAddress('19146').then((location) => {
	console.log(JSON.stringify(location, undefined 2);
}, (errorMessage) => {
	console.log(errorMessage);
});
