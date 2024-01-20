/** @format */

import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useAuth, usePosts } from '../hooks';
// import { auth, db } from '../../config';
import { styles } from '../Style';
import { LogoutIcon } from '../Icons';
import PostsList /*, { useAppContext } */ from '../Components';
import Avatar from '../img/Avatar.jpg';
import { viewComments, viewLocation } from '../Utils/helpersFunc';
import { fetchAllPosts } from '../redux/posts/fetchApi';
import { addLike } from '../redux/comments/fetchApi';
import { logOut } from '../redux/auth/operations';
import Spinner from 'react-native-loading-spinner-overlay';
// import { eventEmitter } from '../Utils/events';

function PostsScreen() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { posts, isLoadingPosts } = usePosts();
	const { user, token } = useAuth();

	useEffect(() => {
		dispatch(fetchAllPosts());
	}, [dispatch]);

	useEffect(() => {
		if (!token) navigation.navigate('Login');
	}, [dispatch]);

	const onAddLike = id => {
		dispatch(addLike({ user, id }));
	};

	// const { posts, setPosts } = useAppContext();

	// useEffect(() => {
	// 	const subscription = eventEmitter.addListener('newPost', data => createPost(data));

	// 	return () => {
	// 		if (subscription && typeof subscription?.remove === 'function') {
	// 			subscription.remove();
	// 		}
	// 	};
	// }, []);

	// const createPost = ({ photo, name, location }) => {
	// 	const newPost = {
	// 		id: `${Date.now()}_${Math.round(Math.random() * 1e9)}`,
	// 		photo: photo,
	// 		title: name,
	// 		comment: 0,
	// 		like: 0,
	// 		location: location.city + ', ' + location.country,
	// 		locationLatitude: location.latitude,
	// 		locationLongitude: location.longitude,
	// 	};
	// 	setPosts(posts => [...posts, newPost]);
	// };

	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	(async () => {
	// 		const snapshot = await getDocs(collection(db, 'posts'));
	// 		snapshot.forEach(doc => {
	// 			const post = { id: doc.id, ...doc.data() };
	// 			setPosts(prevPost => [...prevPost, post]);
	// 		});
	// 	})();
	// }, []);

	return (
		<SafeAreaView style={styles.rootContainer}>
			<Spinner
				visible={isLoadingPosts}
				textContent={'Downloading...'}
				textStyle={{ color: '#FFF' }}
			/>
			<View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Posts</Text>
				</View>
				<View style={styles.quitButton}>
					<TouchableOpacity
						onPress={() => {
							dispatch(logOut());
							navigation.navigate('Login');
						}}
					>
						<Text style={styles.mainText}>
							<LogoutIcon />
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={styles.postContainer}>
				<View style={styles.userContainer}>
					<Image
						source={user.photoURL ? { uri: user.photoURL } : Avatar}
						style={styles.avatarImg}
					></Image>
					<View style={styles.user}>
						<Text style={styles.userName}>{user?.displayName}</Text>
						<Text style={styles.userEmail}>{user?.email}</Text>
					</View>
				</View>
				{posts && (
					<PostsList
						posts={posts}
						onComment={viewComments}
						onLike={onAddLike}
						onLocation={viewLocation}
						navigation={navigation}
						page={'Posts'}
					/>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

export default PostsScreen;
