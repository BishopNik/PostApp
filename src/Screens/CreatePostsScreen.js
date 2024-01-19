/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
import { useDispatch } from 'react-redux';
import { useAuth, usePosts } from '../hooks';
import { addPost } from '../redux/posts/fetchApi';
import Spinner from 'react-native-loading-spinner-overlay';
import { styles } from '../Style';
import { BackIcon, CameraIcon, DeleteIcon, LocationIcon } from '../Icons';
import { eventEmitter } from '../Utils/events';

export default function CreatePost({ route: { params } }) {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { user } = useAuth();
	const { isLoadingPosts } = usePosts();

	const [name, setName] = useState('');
	const [location, setLocation] = useState(null);
	const [locationValue, setLocationValue] = useState('');
	const [photo, setPhoto] = useState(null);
	const [isFocusedName, setIsFocusedName] = useState(false);
	const [isFocusedLocation, setIsFocusedLocation] = useState(false);
	const [hasPermission, setHasPermission] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			// await MediaLibrary.requestPermissionsAsync();

			setHasPermission(status === 'granted');
		})();
	}, []);

	useEffect(() => {
		// Слушаем событие 'onNavigateBack' и вызываем setLocationData при возникновении события
		const subscription = eventEmitter.addListener('onNavigateBack', location =>
			setLocationData(location)
		);

		// Отписываемся от события при размонтировании компонента
		return () => {
			if (subscription && typeof subscription?.remove === 'function') {
				subscription.remove();
			}
		};
	}, []);

	const setLocationData = location => {
		setLocation(location);
		if (location) {
			const value = location.city + ', ' + location.country;
			setLocationValue(value);
		}
	};

	const handleFocus = id => {
		switch (id) {
			case 'name':
				if (!isFocusedName) setIsFocusedName(true);
				if (!isFocusedName) setIsFocusedLocation(false);
				break;

			case 'location':
				if (!isFocusedLocation) setIsFocusedName(false);
				if (!isFocusedLocation) setIsFocusedLocation(true);
				break;

			default:
				break;
		}
	};

	const reset = () => {
		setName('');
		setPhoto(null);
		setLocation(null);
		setLocationValue(null);
		setIsFocusedName(false);
		setIsFocusedLocation(false);
	};

	const createPost = async () => {
		dispatch(addPost({ user, photo, name, location }));
		navigation.navigate('Posts');
		reset();
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
				<SafeAreaView style={styles.rootContainer}>
					<View style={styles.mainTitle}>
						<View>
							<Text style={styles.mainText}>Create post</Text>
						</View>
						<View style={styles.backButton}>
							<TouchableOpacity
								onPress={() => {
									reset();
									navigation.goBack();
								}}
							>
								<View style={styles.mainText}>
									<BackIcon />
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.postContainer}>
						<View style={styles.photoContainer}>
							{photo !== null ? (
								<TouchableOpacity
									style={styles.camera}
									onPress={() => {
										setPhoto(null);
									}}
								>
									<CameraIcon />
								</TouchableOpacity>
							) : null}

							{hasPermission === false ? (
								<Text>No access to camera</Text>
							) : photo === null ? (
								<Camera style={styles.cameraBox} type={type} ref={setCameraRef}>
									<View style={styles.photoView}>
										<TouchableOpacity
											style={styles.flipContainer}
											onPress={() => {
												setType(
													type === Camera.Constants.Type.back
														? Camera.Constants.Type.front
														: Camera.Constants.Type.back
												);
											}}
										>
											<Text style={{ top: 5, left: 5 }}>
												<CameraIcon />
											</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.photoTake}>
										<TouchableOpacity
											style={styles.buttonCamera}
											onPress={async () => {
												if (cameraRef) {
													const { uri } =
														await cameraRef.takePictureAsync({
															quality: 0.15,
														});
													setPhoto(uri);
												}
											}}
										>
											<View style={styles.takePhotoOut}>
												<View style={styles.takePhotoInner}></View>
											</View>
										</TouchableOpacity>
									</View>
								</Camera>
							) : (
								<View
									style={{
										flex: 1,
										width: '100%',
										height: '100%',
									}}
								>
									<Image
										source={{ uri: photo }}
										style={{
											flex: 1,
											width: '100%',
											height: '100%',
											borderRadius: 8,
										}}
									/>
								</View>
							)}
						</View>
						<Text style={styles.photoUpload}>Upload photo</Text>
						<View style={styles.inputPostContainer}>
							<TextInput
								value={name}
								onChangeText={setName}
								placeholder='Name...'
								style={[styles.inputPost, isFocusedName && styles.focusedInputPost]}
								onFocus={() => handleFocus('name')}
							/>
							<View
								style={[
									styles.inputLocation,
									isFocusedLocation && { borderBottomColor: '#FF6C00' },
								]}
							>
								<TouchableOpacity
									onPress={() => {
										navigation.navigate('Map');
									}}
								>
									<LocationIcon />
								</TouchableOpacity>
								<TextInput
									style={styles.inputPostLocation}
									value={locationValue}
									placeholder='Location...'
									onFocus={() => {
										handleFocus('location');
										navigation.navigate('Map');
									}}
								/>
							</View>
						</View>
						<View style={styles.buttonPostContainer}>
							<TouchableOpacity
								style={[
									photo && name && location
										? styles.button
										: styles.buttonNonActive,
									{ marginBottom: 20 },
								]}
								onPress={() => {
									if (
										photo &&
										name &&
										location &&
										location.city &&
										location.country &&
										location.latitude &&
										location.longitude
									) {
										createPost();
										// eventEmitter.emit('newPost', { photo, name, location });
									}
								}}
							>
								<Text
									style={[
										styles.buttonText,
										photo && name && location
											? { color: '#FFF' }
											: { color: '#BDBDBD' },
									]}
								>
									Post
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.buttonDel}
								onPress={() => {
									navigation.navigate('Posts');
									reset();
								}}
							>
								<DeleteIcon />
							</TouchableOpacity>
						</View>
					</View>
					<Spinner
						visible={isLoadingPosts}
						textContent={'Downloading...'}
						textStyle={{ color: '#FFF' }}
					/>
				</SafeAreaView>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}
