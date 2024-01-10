/** @format */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from '../Style';
import { CommentsIcon, LogoutIcon, LikeIcon, LocationIcon } from '../Icons';
import LogoImage from '../img/background.jpg';
import AvatarLogo from '../img/Avatar.jpg';
import Img1 from '../img/Img1.jpg';
import Img2 from '../img/Img2.jpg';
import Img3 from '../img/Img3.jpg';

export default function ProfileScreen() {
	const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Black.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.rootContainer}>
			<ImageBackground source={LogoImage} style={styles.image}>
				<ScrollView style={{ width: '100%' }}>
					<View style={styles.profile}>
						<View style={{ ...styles.avatarContainer, overflow: 'hidden' }}>
							<Image source={AvatarLogo} style={{ width: '100%', height: '100%' }} />
						</View>
						<View style={[styles.quitButton, { top: 22 }]}>
							<TouchableOpacity onPress={() => navigation.navigate('Login')}>
								<Text style={styles.mainText}>
									<LogoutIcon />
								</Text>
							</TouchableOpacity>
						</View>
						<Text style={styles.nameUser}>Natali Romanova</Text>
						<View style={styles.postList}>
							<View style={{ gap: 8 }}>
								<View style={styles.photoContainer}>
									<Image source={Img1} style={styles.img} />
								</View>
								<Text style={styles.postPhotoTitle}>Forest</Text>
								<View style={styles.postDetail}>
									<View style={styles.postDetailFeedback}>
										<TouchableOpacity
											onPress={() =>
												navigation.navigate('Comments', { img: Img1 })
											}
											style={styles.postDetailItem}
										>
											<CommentsIcon />
											<Text style={styles.linkText}>8</Text>
										</TouchableOpacity>
										<TouchableOpacity style={styles.postDetailItem}>
											<LikeIcon />
											<Text style={styles.linkText}>153</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.postDetailLocation}>
										<LocationIcon />
										<TouchableOpacity
											onPress={() =>
												navigation.navigate('Map', { country: 'Ukraine' })
											}
										>
											<Text
												style={[
													styles.linkText,
													{ textDecorationLine: 'underline' },
												]}
											>
												Ukraine
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
							<View style={{ gap: 8 }}>
								<View style={styles.photoContainer}>
									<Image source={Img2} style={styles.img} />
								</View>
								<Text style={styles.postPhotoTitle}>Sunset on the Black Sea</Text>
								<View style={styles.postDetail}>
									<View style={styles.postDetailFeedback}>
										<TouchableOpacity
											onPress={() =>
												navigation.navigate('Comments', { img: Img2 })
											}
											style={styles.postDetailItem}
										>
											<CommentsIcon />
											<Text style={styles.linkText}>3</Text>
										</TouchableOpacity>
										<TouchableOpacity style={styles.postDetailItem}>
											<LikeIcon />
											<Text style={styles.linkText}>200</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.postDetailLocation}>
										<LocationIcon />
										<TouchableOpacity
											onPress={() =>
												navigation.navigate('Map', { country: 'Ukraine' })
											}
										>
											<Text
												style={[
													styles.linkText,
													{ textDecorationLine: 'underline' },
												]}
											>
												Ukraine
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
							<View style={{ gap: 8 }}>
								<View style={styles.photoContainer}>
									<Image source={Img3} style={styles.img} />
								</View>
								<Text style={styles.postPhotoTitle}>An old house in Venice</Text>
								<View style={styles.postDetail}>
									<View style={styles.postDetailFeedback}>
										<TouchableOpacity
											onPress={() =>
												navigation.navigate('Comments', { img: Img3 })
											}
											style={styles.postDetailItem}
										>
											<CommentsIcon />
											<Text style={styles.linkText}>50</Text>
										</TouchableOpacity>
										<TouchableOpacity style={styles.postDetailItem}>
											<LikeIcon />
											<Text style={styles.linkText}>200</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.postDetailLocation}>
										<LocationIcon />
										<TouchableOpacity
											onPress={() =>
												navigation.navigate('Map', { country: 'Italy' })
											}
										>
											<Text
												style={[
													styles.linkText,
													{ textDecorationLine: 'underline' },
												]}
											>
												Italy
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
}
