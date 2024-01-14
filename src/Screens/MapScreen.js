/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import _ from 'lodash';
import { styles } from '../Style';
import { eventEmitter } from '../Utils/events';

export default function MapScreen({ route }) {
	const navigation = useNavigation();
	const country = route.params?.country || null;
	const locationLat = route.params?.locationLatitude || null;
	const locationLong = route.params?.locationLongitude || null;

	const [location, setLocation] = useState(null);
	const [locationMarker, setLocationMarker] = useState(null);

	const detailLocation = async location => {
		let locationName = await Location.reverseGeocodeAsync({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});

		if (locationName.length > 0 && !country) {
			const city = locationName[0].city;
			const country = locationName[0].country;

			return {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				city,
				country,
			};
		}
		return null;
	};

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				console.log('Permission to access location was denied');
			}

			let location = await Location.getCurrentPositionAsync({});

			const coords = await detailLocation(location);
			if (coords) {
				setLocation(coords);
				setLocationMarker(coords);
			}
		})();
	}, []);

	useEffect(() => {
		if (locationLat && locationLong) {
			const coords = {
				latitude: locationLat,
				longitude: locationLong,
			};

			setLocation(coords);
			setLocationMarker(coords);
		}
	}, []);

	const handleRegionChangeComplete = async region => {
		if (country) return;

		const centerLatitude = region.latitude.toFixed(15);
		const centerLongitude = region.longitude.toFixed(15);

		const location = {
			coords: {
				latitude: parseFloat(centerLatitude),
				longitude: parseFloat(centerLongitude),
			},
		};

		const coords = await detailLocation(location);
		setLocationMarker(coords);
	};

	return (
		<View style={styles.rootContainer}>
			<View style={{ ...styles.postContainer, paddingTop: 10 }}>
				<Text style={styles.mapTitle}>
					Location:
					<Text style={styles.country}>
						{' '}
						{country
							? country
							: location?.city && location?.country
							? location.city + ', ' + location.country
							: '...searching'}
					</Text>
				</Text>
				<View
					style={{
						...styles.mapContainer,
						flex: 1,
						alignSelf: 'stretch',
						borderRadius: 8,
					}}
				>
					<MapView
						style={styles.mapStyle}
						region={{
							...location,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						mapType='standard'
						minZoomLevel={15}
						onRegionChangeComplete={handleRegionChangeComplete}
					>
						{locationMarker && (
							<Marker title='Photo Location' coordinate={locationMarker} />
						)}
					</MapView>
				</View>
				{country === null && (
					<TouchableOpacity
						style={[
							locationMarker ? styles.button : styles.buttonNonActive,
							{ marginBottom: 20 },
						]}
						onPress={() => {
							if (location) {
								eventEmitter.emit('onNavigateBack', locationMarker);
								navigation.goBack();
							}
						}}
					>
						<Text
							style={[
								styles.buttonText,
								location ? { color: '#FFF' } : { color: '#BDBDBD' },
							]}
						>
							Confirm Location
						</Text>
					</TouchableOpacity>
				)}
			</View>
			<StatusBar style='auto' />
		</View>
	);
}
