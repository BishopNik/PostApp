/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	ImageBackground,
	Image,
	TextInput,
	Keyboard,
	KeyboardAvoidingView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Dimensions,
} from 'react-native';
import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { styles } from '../Style';
import LogoImage from '../img/background.jpg';
import { AddIcon, ClearIcon } from '../Icons';
import { toastWindow } from '../Utils/toastWindow';
import { register } from '../redux/auth/operations';

function RegistrationScreen({ navigation }) {
	const dispatch = useDispatch();
	const { isLoggedIn } = useAuth();

	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isFocusedLogin, setIsFocusedLogin] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);
	const [hasPermission, setHasPermission] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [activeCamera, setActiveCamera] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();

			setHasPermission(status === 'granted');
		})();
	}, []);

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('Home');
		}
	}, [isLoggedIn]);

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

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const registerDB = async (email, password, login, photo) => {
		if (!email.trim() || !password.trim() || !login.trim()) {
			toastWindow('Please fill in the fields ...');
			return;
		}
		dispatch(register({ email, password, login, photo }));
	};

	const makeAvatar = () => {
		setPhoto(null);
		setActiveCamera(true);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ImageBackground source={LogoImage} style={styles.image}>
					<KeyboardAvoidingView
						behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
						style={styles.formReg}
					>
						<View
							style={{
								...styles.avatarContainer,
								width: activeCamera ? 250 : 120,
								height: activeCamera ? 250 : 120,
								left: Dimensions.get('window').width / 2,
								transform: activeCamera
									? [{ translateX: -125 }, { translateY: -180 }]
									: [{ translateX: -55 }, { translateY: -60 }],
							}}
						>
							{photo && <Image source={{ uri: photo }} style={styles.avatar} />}
							{hasPermission ? (
								activeCamera && (
									<Camera
										style={{
											...styles.cameraBox,
											borderWidth: 1,
										}}
										type={Camera.Constants.Type.front}
										ref={setCameraRef}
									>
										<View style={{ ...styles.photoTake, padding: 0 }}>
											<TouchableOpacity
												style={styles.buttonCamera}
												onPress={async () => {
													if (cameraRef) {
														const { uri } =
															await cameraRef.takePictureAsync({
																quality: 0.1,
															});
														setPhoto(uri);
														setActiveCamera(false);
													}
												}}
											>
												<View
													style={{
														...styles.takePhotoOut,
														transform: [{ scale: 0.4 }],
													}}
												>
													<View style={styles.takePhotoInner}></View>
												</View>
											</TouchableOpacity>
										</View>
									</Camera>
								)
							) : (
								<Text>No access</Text>
							)}
							<TouchableOpacity style={styles.addAvatar} onPress={makeAvatar}>
								{photo ? <ClearIcon /> : <AddIcon />}
							</TouchableOpacity>
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
							<TouchableOpacity
								style={styles.button}
								onPress={() => registerDB(email, password, login, photo)}
							>
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

export default RegistrationScreen;
