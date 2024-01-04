/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoImage from '../img/3060bf968d92368179ce26a756ce4271.jpeg';

export default RegistrationScreen = () => (
	<View style={styles.container}>
		<Image source={LogoImage} style={{ width: 700, height: 700 }} />
		<Text style={styles.title}>React Native</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: '#eaeaea',
	},
	title: {
		marginTop: 16,
		paddingVertical: 8,
		borderWidth: 4,
		borderColor: '#20232a',
		borderRadius: 6,
		backgroundColor: '#61dafb',
		color: '#20232a',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
});
