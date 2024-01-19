/** @format */

export const viewComments = (photo, id, navigation) => {
	navigation.navigate('Comments', { img: photo, id: id });
};

export const viewLocation = (location, locationLatitude, locationLongitude, navigation) => {
	navigation.navigate('Map', {
		country: location,
		locationLatitude,
		locationLongitude,
	});
};
