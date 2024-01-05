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
	Image,
	Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import styles from './src/Style';
import LogoImage from './src/img/background.jpeg';
import SVGComponent from './src/Icons/Add_icon.jsx';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto: require('./src/fonts/Roboto-Regular.ttf'),
	});

	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isFocusedLogin, setIsFocusedLogin] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);

	const handleFocus = id => {
		switch (id) {
			case 'login':
				setIsFocusedLogin(true);
				setIsFocusedEmail(false);
				setIsFocusedPassword(false);
				break;

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
					style={styles.formReg}
				>
					<View style={styles.avatarContainer}>
						<View style={styles.addAvatar}>
							<SVGComponent />
						</View>
					</View>

					<Text style={styles.title}>Create an Account</Text>
					<View style={styles.inputBox}>
						<TextInput
							value={login}
							onChangeText={setLogin}
							placeholder='Login'
							style={[styles.input, isFocusedLogin && styles.focusedInput]}
							onFocus={() => handleFocus('login')}
						/>
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
							<Text style={styles.buttonText}>Sign Up</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.singupLink} onPress={onLogin}>
							<Text style={styles.signup}>
								Do have you an account?{' '}
								<Text style={{ textDecorationLine: 'underline' }}>Sign In</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
			<StatusBar style='auto' />
		</View>
	);
}

const commonTextStyle = {
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: 16,
	lineHeight: 20,
};

// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: 'rgba(208, 211, 217, 0.90)',
// 	},
// 	image: {
// 		width: '100%',
// 		height: '100%',
// 		justifyContent: 'flex-end',
// 		alignItems: 'center',
// 	},
// 	avatarContainer: {
// 		position: 'absolute',
// 		top: '0',
// 		left: '50%',
// 		transform: [{ translateX: -50 }, { translateY: -50 }],
// 		width: 120,
// 		height: 120,
// 		backgroundColor: '#F6F6F6',
// 		borderRadius: 16,
// 	},
// 	addAvatar: {
// 		width: 25,
// 		height: 25,
// 		position: 'absolute',
// 		right: 0,
// 		bottom: 13,
// 		transform: [{ translateX: 12.5 }],
// 	},
// 	title: {
// 		...commonTextStyle,
// 		textAlign: 'center',
// 		marginBottom: 32,
// 		color: '#212121',
// 		textAlign: 'center',
// 		fontSize: 30,
// 		lineHeight: 30,
// 		fontWeight: '500',
// 		letterSpacing: 0.3,
// 		marginBottom: 32,
// 	},
// 	form: {
// 		position: 'relative',
// 		backgroundColor: '#fff',
// 		width: '100%',
// 		borderTopLeftRadius: 25,
// 		borderTopRightRadius: 25,
// 		paddingTop: 92,
// 		paddingLeft: 16,
// 		paddingRight: 16,
// 	},
// 	inputBox: {
// 		display: 'flex',
// 		gap: 16,
// 		marginBottom: 43,
// 	},
// 	inputPassContainer: {
// 		position: 'relative',
// 	},
// 	input: {
// 		...commonTextStyle,
// 		width: '100%',
// 		height: 50,
// 		backgroundColor: '#F6F6F6',
// 		borderColor: '#E8E8E8',
// 		borderWidth: 1,
// 		borderRadius: 12,
// 		color: '#BDBDBD',
// 		padding: 16,
// 	},
// 	focusedInput: {
// 		borderColor: '#FF6C00',
// 	},
// 	showPasswordButton: {
// 		position: 'absolute',
// 		right: 16,
// 		top: 16,
// 	},
// 	showPasswordText: {
// 		...commonTextStyle,
// 		color: '#1B4371',
// 		textAlign: 'right',
// 	},
// 	buttonBox: {
// 		display: 'flex',
// 		gap: 16,
// 		paddingBottom: 66,
// 	},
// 	button: {
// 		backgroundColor: '#FF6C00',
// 		borderRadius: 100,
// 	},
// 	buttonText: {
// 		...commonTextStyle,
// 		color: '#FFF',
// 		textAlign: 'center',
// 		paddingTop: 16,
// 		paddingLeft: 32,
// 		paddingRight: 32,
// 		paddingBottom: 16,
// 	},
// 	singupLink: {
// 		width: '100%',
// 	},
// 	signup: {
// 		...commonTextStyle,
// 		color: '#1B4371',
// 		textAlign: 'center',
// 	},
// });
