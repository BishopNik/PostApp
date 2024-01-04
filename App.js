/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import LogoImage from './src/img/background.jpeg';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto: require('./src/fonts/Roboto-Regular.ttf'),
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onLogin = () => {
		Alert.alert('Credentials', `${email} + ${password}`);
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={LogoImage} style={styles.image}>
				<KeyboardAvoidingView
					behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
					style={styles.form}
				>
					<Text style={styles.title}>Login</Text>
					<View style={styles.inputBox}>
						<TextInput
							value={email}
							onChangeText={setEmail}
							placeholder='Email'
							style={styles.input}
						/>
						<TextInput
							value={password}
							onChangeText={setPassword}
							placeholder='Password'
							secureTextEntry
							style={styles.input}
						/>
					</View>
					<View style={styles.buttonBox}>
						<TouchableOpacity style={styles.button} onPress={onLogin}>
							<Text style={styles.buttonText}>Login</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.singupLink} onPress={onLogin}>
							<Text style={styles.signup}>
								Don't have an account?{' '}
								<Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(208, 211, 217, 0.90)',
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	title: {
		color: '#212121',
		textAlign: 'center',
		fontFamily: 'Roboto',
		fontSize: 30,
		fontStyle: 'normal',
		fontWeight: '500',
		letterSpacing: 0.3,
		marginBottom: 32,
	},
	form: {
		backgroundColor: '#fff',
		width: '100%',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingTop: 32,
		paddingLeft: 16,
		paddingRight: 16,
	},
	inputBox: {
		display: 'flex',
		gap: 16,
		marginBottom: 43,
	},
	input: {
		width: '100%',
		height: 50,
		backgroundColor: '#F6F6F6',
		borderColor: '#E8E8E8',
		borderWidth: 1,
		borderRadius: 12,
		color: '#BDBDBD',
		fontFamily: 'Roboto',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 20,
		padding: 16,
	},
	buttonBox: {
		display: 'flex',
		gap: 16,
		paddingBottom: 132,
	},
	button: {
		backgroundColor: '#FF6C00',
		borderRadius: 100,
	},
	buttonText: {
		color: '#FFF',
		textAlign: 'center',
		fontFamily: 'Roboto',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 20,
		paddingTop: 16,
		paddingLeft: 32,
		paddingRight: 32,
		paddingBottom: 16,
	},
	singupLink: {
		width: '100%',
	},
	signup: {
		color: '#1B4371',
		textAlign: 'center',
		fontFamily: 'Roboto',
		fontSize: 16,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 20,
	},
});
