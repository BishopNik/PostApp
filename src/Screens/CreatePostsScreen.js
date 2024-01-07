/** @format */

import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import styles from '../Style';

export default function CreatePost() {
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
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Comments</Text>
				</View>
			</View>
			<ScrollView style={styles.postContainer}>
				<Text style={styles.post}>Comment</Text>
			</ScrollView>
			<View style={styles.controll}></View>
		</SafeAreaView>
	);
}
