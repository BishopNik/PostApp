/** @format */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from '../Style';

export default function CommentsScreen() {
	const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Black.ttf'),
	});

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
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}
