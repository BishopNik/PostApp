/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, SendCommentIcon } from '../Icons';
import { styles } from '../Style';
import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpg';

export default function CommentsScreen({ route }) {
	const img = route.params?.img ? route.params.img : null;
	const navigation = useNavigation();

	const [comment, setComment] = useState('');

	return (
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Comments</Text>
				</View>
				<View style={styles.backButton}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<View style={styles.mainText}>
							<BackIcon />
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView style={styles.commentList}>
				<View style={styles.photoContainer}>
					<Image source={img} style={styles.img} />
				</View>
				<View style={{ gap: 24 }}>
					<View style={styles.userComment}>
						<View style={styles.userIcon}>
							<Image source={user2} style={styles.img} />
						</View>
						<View style={styles.userCommentTextBox}>
							<Text style={styles.userCommentText}>
								Really love your most recent photo. I’ve been trying to capture the
								same thing for a few months and would love some tips!
							</Text>
							<Text style={styles.timeComment}>09 червня, 2020 | 08:40</Text>
						</View>
					</View>
					<View style={{ ...styles.userComment, ...styles.userCommentMirror }}>
						<View style={styles.userIcon}>
							<Image source={user1} style={styles.img} />
						</View>
						<View style={styles.userCommentTextBox}>
							<Text style={styles.userCommentText}>
								A fast 50mm like f1.8 would help with the bokeh. I’ve been using
								primes as they tend to get a bit sharper images.
							</Text>
							<Text style={{ ...styles.timeComment, ...styles.timeCommentMirror }}>
								09 червня, 2020 | 09:14
							</Text>
						</View>
					</View>
					<View style={styles.userComment}>
						<View style={styles.userIcon}>
							<Image source={user2} style={styles.img} />
						</View>
						<View style={styles.userCommentTextBox}>
							<Text style={styles.userCommentText}>
								Thank you! That was very helpful!
							</Text>
							<Text style={styles.timeComment}>09 червня, 2020 | 09:20</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.inputCommentContainer}>
				<TextInput
					value={comment}
					onChangeText={setComment}
					placeholder='Comment'
					style={[styles.inputComment]}
				/>
				<TouchableOpacity style={styles.sendComment}>
					<SendCommentIcon color='#FF6C00' />
				</TouchableOpacity>
			</View>

			<StatusBar style='auto' />
		</SafeAreaView>
	);
}
