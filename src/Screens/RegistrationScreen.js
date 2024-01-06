/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Text,
	View,
	ImageBackground,
	TextInput,
	Keyboard,
	KeyboardAvoidingView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import styles from '../Style';
import LogoImage from '../img/background.jpeg';
import { AddIcon, ClearIcon } from '../Icons';

function LoginScreen({ navigation }) {
	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Regular.ttf'),
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
		Alert.alert('Credentials', `${login} + ${email} + ${password}`);
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ImageBackground source={LogoImage} style={styles.image}>
					<KeyboardAvoidingView
						behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
						style={styles.formReg}
					>
						<View style={styles.avatarContainer}>
							<View style={styles.addAvatar}>
								<AddIcon />
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
							<TouchableOpacity
								style={styles.singupLink}
								onPress={() => navigation.navigate('Login')}
							>
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
		</TouchableWithoutFeedback>
	);
}

export default LoginScreen;
