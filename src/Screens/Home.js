/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import styles from '../Style';
import { GridIcon, NewIcon, UserIcon, LogoutIcon } from '../Icons';
import CreatePost from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import PostsScreen from './PostsScreen';

const Tabs = createBottomTabNavigator();

export default function Home() {
	const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Black.ttf'),
	});

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<Tabs.Navigator
				screenOptions={{
					tabBarShowLabel: false,
					tabBarStyle: {
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						rowGap: 39,
						paddingBottom: 22,
						paddingTop: 9,
						paddingLeft: 82,
						paddingRight: 82,
						borderTopColor: '#BDBDBD',
						borderTopWidth: 1,
					},
					tabBarItemStyle: {},
				}}
			>
				<Tabs.Screen
					name='Posts'
					component={PostsScreen}
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<GridIcon color={focused ? '#FF6C00' : '#fff'} />
						),
					}}
				/>
				<Tabs.Screen
					name='Create'
					component={CreatePost}
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<NewIcon color={focused ? '#FF6C00' : '#fef2e4'} />
						),
					}}
				/>
				<Tabs.Screen
					name='Profile'
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<UserIcon color={focused ? '#FF6C00' : '#fff'} />
						),
					}}
				/>
			</Tabs.Navigator>
			<StatusBar style='auto' />
		</>
	);
}
