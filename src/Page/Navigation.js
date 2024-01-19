/** @format */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { refreshUser } from '../redux/auth/operations';
import { toastWindow } from '../Utils/toastWindow';
import { resetError } from '../redux/auth/authSlice';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import CommentsScreen from '../Screens/CommentsScreen';
import Home from '../Screens/Home';
import CreatePost from '../Screens/CreatePostsScreen';
import MapScreen from '../Screens/MapScreen';
import Spinner from 'react-native-loading-spinner-overlay';

const Stack = createStackNavigator();

const Navigation = () => {
	const { statusPost, statusUser, errorUser, isRefreshing } = useAuth();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	useEffect(() => {
		if (errorUser !== null && errorUser !== 'Unable to fetch user') toastWindow(`${errorUser}`);
		dispatch(resetError());
	}, [dispatch, errorUser]);

	useEffect(() => {
		if (statusPost) {
			toastWindow(`${statusPost}`);
		}
	}, [statusPost]);

	useEffect(() => {
		if (statusUser) {
			toastWindow(`${statusUser}`);
		}
	}, [statusUser]);

	return (
		<>
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
					<Stack.Screen name='Create' component={CreatePost} />
					<Stack.Screen
						name='Map'
						component={MapScreen}
						options={{
							headerStyle: {
								borderBottomColor: '#BDBDBD',
								borderBottomWidth: 1,
							},
						}}
					/>
					<Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>
			<Spinner
				visible={isRefreshing}
				textContent={'Downloading...'}
				textStyle={{ color: '#FFF' }}
			/>
		</>
	);
};

export default Navigation;
