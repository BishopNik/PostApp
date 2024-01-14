/** @format */

import 'react-native-gesture-handler';
import React from 'react';
import { AppProvider } from './src/Components';
import Navigation from './src/Page/Navigation';
import { useFonts } from 'expo-font';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto: require('./src/Fonts/Roboto-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<AppProvider>
			<Navigation />
		</AppProvider>
	);
}
