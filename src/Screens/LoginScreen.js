/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	Text,
	View,
	ImageBackground,
	TextInput,
	Keyboard,
	KeyboardAvoidingView,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { styles } from '../Style';
import LogoImage from '../img/background.jpg';
import { toastWindow } from '../Utils/toastWindow';
import { logIn } from '../redux/auth/operations';

function LoginScreen() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { isLoggedIn } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('Home');
		}
	}, [isLoggedIn]);

	const handleFocus = id => {
		switch (id) {
			case 'email':
				setIsFocusedEmail(true);
				setIsFocusedPassword(false);
				break;

			case 'password':
				setIsFocusedEmail(false);
				setIsFocusedPassword(true);
				break;

			default:
				break;
		}
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const loginDB = async (email, password) => {
		if (!email.trim() || !password.trim()) {
			toastWindow('Please fill in the fields ...');
			return;
		}

		dispatch(logIn({ email, password }));
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
							<TouchableOpacity
								style={styles.button}
								onPress={() => loginDB(email, password)}
							>
								<Text style={styles.buttonText}>Login</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.singupLink}
								onPress={() => navigation.navigate('Registration', { user: null })}
							>
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
		</TouchableWithoutFeedback>
	);
}

export default LoginScreen;
