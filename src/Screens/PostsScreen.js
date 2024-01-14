/** @format */

import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Style';
import { LogoutIcon } from '../Icons';
import PostsList, { useAppContext } from '../Components';
import Avatar from '../img/Avatar.jpg';
import { viewComments, viewLocation } from '../Utils/helpersFunc';
import { eventEmitter } from '../Utils/events';

function PostsScreen() {
	const navigation = useNavigation();
	const { posts, setPosts } = useAppContext();

	useEffect(() => {
		const subscription = eventEmitter.addListener('newPost', data => createPost(data));

		return () => subscription.remove();
	}, []);

	const createPost = ({ photo, name, location }) => {
		const newPost = {
			id: `${Date.now()}_${Math.round(Math.random() * 1e9)}`,
			photo: photo,
			title: name,
			comment: 0,
			like: 0,
			location: location.city + ', ' + location.country,
			locationLatitude: location.latitude,
			locationLongitude: location.longitude,
		};
		setPosts(posts => [...posts, newPost]);
	};

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
				{posts && (
					<PostsList
						posts={posts}
						onComment={viewComments}
						onLocation={viewLocation}
						navigation={navigation}
					/>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

export default PostsScreen;
