/** @format */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import PostsScreen from '../Screens/PostsScreen';
import CommentsScreen from '../Screens/CommentsScreen';
import CreatePost from '../Screens/CreatePostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Home from '../Screens/Home';

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Registration' component={RegistrationScreen} />
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Posts' component={PostsScreen} />
				<Stack.Screen name='Comments' component={CommentsScreen} />
				<Stack.Screen name='Create' component={CreatePost} />
				<Stack.Screen name='Profile' component={ProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
