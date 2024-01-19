/** @format */

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
// import { getDocs, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useAuth, usePosts } from '../hooks';
import { logOut } from '../redux/auth/operations';
// import { auth, db } from '../../config';
import { styles } from '../Style';
import { LogoutIcon } from '../Icons';
import PostsList /*, {  useAppContext  }*/ from '../Components';
import LogoImage from '../img/background.jpg';
import Avatar from '../img/Avatar.jpg';
import { viewComments, viewLocation } from '../Utils/helpersFunc';

export default function ProfileScreen() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { user } = useAuth();
	const { postsSelf: posts } = usePosts();

	// const { posts } = useAppContext();

	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	(async () => {
	// 		const snapshot = await getDocs(collection(db, 'posts'));
	// 		snapshot.forEach(doc => {
	// 			if (doc.data().userId === user.uid) {
	// 				const post = { id: doc.id, ...doc.data() };
	// 				setPosts(prevPost => [...prevPost, post]);
	// 			}
	// 		});
	// 	})();
	// }, []);

	return (
		<View style={styles.rootContainer}>
			<ImageBackground source={LogoImage} style={styles.image}>
				<ScrollView style={{ width: '100%' }}>
					<View style={styles.profile}>
						<View
							style={{
								...styles.avatarContainer,
								overflow: 'hidden',
								width: 120,
								height: 120,
								left: '50%',
								transform: [{ translateX: -45 }, { translateY: -60 }],
							}}
						>
							<Image
								source={user.photoURL ? { uri: user.photoURL } : Avatar}
								style={{ width: '100%', height: '100%' }}
							/>
						</View>
						<View style={[styles.quitButton, { top: 22 }]}>
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
						<Text style={styles.nameUser}>{user?.displayName}</Text>
						{posts && (
							<PostsList
								posts={posts}
								onComment={viewComments}
								onLocation={viewLocation}
								navigation={navigation}
							/>
						)}
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
}
