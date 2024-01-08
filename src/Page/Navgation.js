/** @format */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import CommentsScreen from '../Screens/CommentsScreen';
import Home from '../Screens/Home';
import CreatePost from '../Screens/CreatePostsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen
					name='Login'
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Registration'
					component={RegistrationScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Comments'
					component={CommentsScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Create'
					component={CreatePost}
					options={{ tabBarVisible: false }}
				/>
				<Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
