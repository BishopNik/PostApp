/** @format */

import 'react-native-gesture-handler';
import React from 'react';
import { AppProvider } from './src/Components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/Page/Navigation';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';
import { store, persistor } from './src/redux/store';

const App = () => {
	const [fontsLoaded] = useFonts({
		Roboto: require('./src/Fonts/Roboto-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Navigation />
			</PersistGate>
			<Toast />
		</Provider>
	);
};

export default App;
