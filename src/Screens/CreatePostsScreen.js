/** @format */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from '../Style';
import { BackIcon } from '../Icons';

export default function CreatePost() {
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
				<View style={styles.backButton}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Text style={styles.mainText}>
							<BackIcon width={24} height={24} color='#212121' />
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={styles.postContainer}>
				<Text style={styles.post}>Comment</Text>
			</ScrollView>
			<View style={styles.controll}></View>
		</SafeAreaView>
	);
}
