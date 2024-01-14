/** @format */

export const viewComments = (photo, navigation) => {
	navigation.navigate('Comments', { img: photo });
};

export const viewLocation = (location, locationLatitude, locationLongitude, navigation) => {
	navigation.navigate('Map', {
		country: location,
		locationLatitude,
		locationLongitude,
	});
};
