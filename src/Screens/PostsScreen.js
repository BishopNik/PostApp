/** @format */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import styles from '../Style';
import { GridIcon, NewIcon, UserIcon, LogoutIcon } from './src/Icons';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto: require('./src/fonts/Roboto-Black.ttf'),
	});

	const onClickEvent = e => {
		Alert.alert('Event: ', e);
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Posts</Text>
				</View>
				<View style={styles.quitButton}>
					<TouchableOpacity onPress={() => onClickEvent('Log out')}>
						<Text style={styles.mainText}>
							<LogoutIcon />
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={styles.postContainer}>
				<Text style={styles.post}>Post user</Text>
			</ScrollView>
			<View style={styles.controll}>
				<TouchableOpacity onPress={() => onClickEvent('Menu')}>
					<Text style={styles.mainText}>
						<GridIcon />
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => onClickEvent('New Post')}>
					<Text style={styles.mainText}>
						<NewIcon />
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => onClickEvent('Settings')}>
					<Text style={styles.mainText}>
						<UserIcon />
					</Text>
				</TouchableOpacity>
			</View>
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}
