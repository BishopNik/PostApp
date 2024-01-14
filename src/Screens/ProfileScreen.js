/** @format */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from '../Style';
import { LogoutIcon } from '../Icons';
import PostsList, { useAppContext } from '../Components';
import LogoImage from '../img/background.jpg';
import AvatarLogo from '../img/Avatar.jpg';
import { viewComments, viewLocation } from '../Utils/helpersFunc';

export default function ProfileScreen() {
	const navigation = useNavigation();
	const { posts } = useAppContext();

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
						<PostsList
							posts={posts}
							onComment={viewComments}
							onLocation={viewLocation}
							page={'Profile'}
							navigation={navigation}
						/>
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
}
