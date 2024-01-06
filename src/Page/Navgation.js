/** @format */

// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Registration' component={RegistrationScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
