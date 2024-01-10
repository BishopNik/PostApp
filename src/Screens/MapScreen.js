/** @format */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useFonts } from 'expo-font';
import { styles } from '../Style';

export default function MapScreen({ route }) {
	const country = route.params?.country ? route.params.country : null;

	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Black.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.rootContainer}>
			{/* <View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Comments</Text>
				</View>
			</View> */}
			<ScrollView style={styles.postContainer}>
				<Text style={styles.mapTitle}>
					Location:
					<Text style={styles.country}> {country}</Text>
				</Text>
				<View style={styles.mapContainer}>
					<MapView
						style={styles.mapStyle}
						region={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						mapType='standard'
						minZoomLevel={15}
						onMapReady={() => console.log('Map is ready')}
						onRegionChange={() => console.log('Region change')}
					>
						<Marker
							title='I am here'
							coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
							description='Hello'
						/>
					</MapView>
				</View>
			</ScrollView>
			<View style={styles.controll}></View>
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}
