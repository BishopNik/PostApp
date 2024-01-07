/** @format */

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from '../Style';
import { BackIcon, CameraIcon, DeleteIcon, LocationIcon } from '../Icons';

export default function CreatePost() {
	const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Black.ttf'),
	});

	const [name, setName] = useState('');
	const [location, setLocation] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [isFocusedName, setIsFocusedName] = useState(false);
	const [isFocusedLocation, setIsFocusedLocation] = useState(false);

	const handleFocus = id => {
		switch (id) {
			case 'name':
				setIsFocusedName(true);
				setIsFocusedLocation(false);
				break;

			case 'location':
				setIsFocusedName(false);
				setIsFocusedLocation(true);
				break;

			default:
				break;
		}
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Create post</Text>
				</View>
				<View style={styles.backButton}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<View style={styles.mainText}>
							<BackIcon />
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.postContainer}>
				<View style={styles.photoContainer}>
					<TouchableOpacity onPress={() => navigation.navigate('Map')}>
						<View style={styles.camera}>
							<CameraIcon />
						</View>
					</TouchableOpacity>
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
						<LocationIcon />
						<TextInput
							value={location}
							onChangeText={setLocation}
							placeholder='Location...'
							style={styles.inputPostLocation}
							onFocus={() => handleFocus('location')}
						/>
					</View>
				</View>
				<View style={styles.buttonPostContainer}>
					<TouchableOpacity
						style={[
							photo && name && location ? styles.button : styles.buttonNonActive,
							{ marginBottom: 20 },
						]}
						onPress={() => navigation.navigate('Home')}
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
						onPress={() => navigation.navigate('Posts')}
					>
						<DeleteIcon />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.controll}></View>
		</SafeAreaView>
	);
}
