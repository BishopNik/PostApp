/** @format */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from '../Style';
import { LogoutIcon } from '../Icons';
import Avatar from '../img/Avatar.jpg';

export default function PostsScreen() {
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
					<Text style={styles.mainText}>Posts</Text>
				</View>
				<View style={styles.quitButton}>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Text style={styles.mainText}>
							<LogoutIcon />
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={styles.postContainer}>
				<View style={styles.userContainer}>
					<Image source={Avatar} style={styles.avatarImg}></Image>
					<View style={styles.user}>
						<Text style={styles.userName}>Natali Romanova</Text>
						<Text style={styles.userEmail}>email@example.com</Text>
					</View>
				</View>
				<View style={styles.userContainer}>
					<Image source={Avatar} style={styles.avatarImg}></Image>
					<View style={styles.user}>
						<Text style={styles.userName}>Eva Ivanova</Text>
						<Text style={styles.userEmail}>email@ivanov.com</Text>
					</View>
				</View>
				<View style={styles.userContainer}>
					<Image source={Avatar} style={styles.avatarImg}></Image>
					<View style={styles.user}>
						<Text style={styles.userName}>Masha Pupkina</Text>
						<Text style={styles.userEmail}>email@pupkin.com</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
