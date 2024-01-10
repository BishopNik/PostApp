/** @format */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from '../Style';
import { CommentEmptyIcon, LogoutIcon, LocationIcon } from '../Icons';
import Avatar from '../img/Avatar.jpg';
import Img1 from '../img/Img1.jpg';
import Img2 from '../img/Img2.jpg';
import Img3 from '../img/Img3.jpg';

export default function PostsScreen() {
	const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		Roboto: require('../Fonts/Roboto-Black.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Posts</Text>
				</View>
				<View style={styles.quitButton}>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Text style={styles.mainText}>
							<LogoutIcon />
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={styles.postContainer}>
				<View style={styles.userContainer}>
					<Image source={Avatar} style={styles.avatarImg}></Image>
					<View style={styles.user}>
						<Text style={styles.userName}>Natali Romanova</Text>
						<Text style={styles.userEmail}>email@example.com</Text>
					</View>
				</View>
				<View style={styles.postList}>
					<View style={{ gap: 8 }}>
						<View style={styles.photoContainer}>
							<Image source={Img1} style={styles.img} />
						</View>
						<Text style={styles.postPhotoTitle}>Forest</Text>
						<View style={styles.postDetail}>
							<TouchableOpacity
								onPress={() => navigation.navigate('Comments', { img: Img1 })}
								style={styles.postDetailItem}
							>
								<CommentEmptyIcon />
								<Text style={styles.linkText}>8</Text>
							</TouchableOpacity>
							<View style={styles.postDetailLocation}>
								<LocationIcon />
								<TouchableOpacity
									onPress={() =>
										navigation.navigate('Map', {
											country: "Ivano-Frankivs'k Region, Ukraine",
										})
									}
								>
									<Text
										style={[
											styles.linkText,
											{ textDecorationLine: 'underline' },
										]}
									>
										Ivano-Frankivs'k Region, Ukraine
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
							<TouchableOpacity
								onPress={() => navigation.navigate('Comments', { img: Img2 })}
								style={styles.postDetailItem}
							>
								<CommentEmptyIcon />
								<Text style={styles.linkText}>3</Text>
							</TouchableOpacity>
							<View style={styles.postDetailLocation}>
								<LocationIcon />
								<TouchableOpacity
									onPress={() =>
										navigation.navigate('Map', {
											country: 'Odesa Region, Ukraine',
										})
									}
								>
									<Text
										style={[
											styles.linkText,
											{ textDecorationLine: 'underline' },
										]}
									>
										Odesa Region, Ukraine
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
							<TouchableOpacity
								onPress={() => navigation.navigate('Comments', { img: Img3 })}
								style={styles.postDetailItem}
							>
								<CommentEmptyIcon />
								<Text style={styles.linkText}>50</Text>
							</TouchableOpacity>
							<View style={styles.postDetailLocation}>
								<LocationIcon />
								<TouchableOpacity
									onPress={() =>
										navigation.navigate('Map', { country: 'Venice, Italy' })
									}
								>
									<Text
										style={[
											styles.linkText,
											{ textDecorationLine: 'underline' },
										]}
									>
										Venice, Italy
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
