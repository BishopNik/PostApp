/** @format */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { GridIcon, NewIcon, UserIcon } from '../Icons';
import CreatePost from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import PostsScreen from './PostsScreen';
import { options } from '../Style';

const Tabs = createBottomTabNavigator();

export default function Home() {
	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Black.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				...options(route),
			})}
		>
			<Tabs.Screen
				name='Posts'
				component={PostsScreen}
				options={({ route }) => ({
					tabBarIcon: ({ color, size, focused }) => (
						<GridIcon color={focused ? '#FF6C00' : '#fff'} />
					),
					headerShown: false,
				})}
			/>

			<Tabs.Screen
				name='Create'
				component={CreatePost}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<NewIcon color={focused ? '#FF6C00' : '#fef2e4'} />
					),
					headerShown: false,
					tabBarVisible: false,
				}}
			/>
			<Tabs.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<UserIcon color={focused ? '#FF6C00' : '#fff'} />
					),
					headerShown: false,
				}}
			/>
		</Tabs.Navigator>
	);
}
