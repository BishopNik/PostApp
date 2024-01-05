/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Text,
	View,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { useFonts } from 'expo-font';

import styles from '../Style';
import LogoImage from './src/img/background.jpeg';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto: require('./src/fonts/Roboto-Regular.ttf'),
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);

	const handleFocus = id => {
		switch (id) {
			case 'email':
				setIsFocusedLogin(false);
				setIsFocusedEmail(true);
				setIsFocusedPassword(false);
				break;

			case 'password':
				setIsFocusedLogin(false);
				setIsFocusedEmail(false);
				setIsFocusedPassword(true);
				break;

			default:
				break;
		}
	};

	const onLogin = () => {
		Alert.alert('Credentials', `${email} + ${password}`);
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
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
					<Text style={styles.title}>Sign Into Your Account</Text>
					<View style={styles.inputBox}>
						<TextInput
							value={email}
							onChangeText={setEmail}
							placeholder='Email'
							style={[styles.input, isFocusedEmail && styles.focusedInput]}
							onFocus={() => handleFocus('email')}
						/>
						<View style={styles.inputPassContainer}>
							<TextInput
								value={password}
								onChangeText={setPassword}
								placeholder='Password'
								secureTextEntry={!showPassword}
								style={[styles.input, isFocusedPassword && styles.focusedInput]}
								onFocus={() => handleFocus('password')}
							/>
							<TouchableOpacity
								onPress={toggleShowPassword}
								style={styles.showPasswordButton}
							>
								<Text style={styles.showPasswordText}>
									{showPassword ? 'Hide' : 'Show'}{' '}
								</Text>
							</TouchableOpacity>
						</View>
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
