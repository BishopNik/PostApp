/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, SendCommentIcon } from '../Icons';
import { styles } from '../Style';
import { useDispatch } from 'react-redux';
import { useComments, useAuth } from '../hooks';
import { addComment, fetchAllComments } from '../redux/comments/fetchApi';
import Spinner from 'react-native-loading-spinner-overlay';
import CommentsList from '../Components/CommentsList';
import { toastWindow } from '../Utils/toastWindow';
import { resetError, resetState } from '../redux/comments/commentsSlice';

export default function CommentsScreen({ route }) {
	const img = route.params?.img ? route.params.img : null;
	const idPost = route.params?.id ? route.params.id : null;
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { comments, isLoadingComments, statusComments } = useComments();
	const { user } = useAuth();
	const [comment, setComment] = useState('');

	useEffect(() => {
		dispatch(fetchAllComments({ idPost }));
	}, [dispatch]);

	useEffect(() => {
		if (statusComments) {
			toastWindow(`${statusComments}`);
		}
	}, [statusComments]);

	const addCommentInState = e => {
		setComment(e);
	};

	const addCommentInBase = () => {
		if (!comment.trim()) {
			toastWindow('Please write comment ...');
			return;
		}

		dispatch(addComment({ user, idPost, comment }));
		setComment('');
	};

	return (
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.mainTitle}>
				<View>
					<Text style={styles.mainText}>Comments</Text>
				</View>
				<View style={styles.backButton}>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
							dispatch(resetState());
							dispatch(resetError());
						}}
					>
						<View style={styles.mainText}>
							<BackIcon />
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView style={styles.commentList}>
				<Spinner
					visible={isLoadingComments}
					textContent={'Public...'}
					textStyle={{ color: '#FFF' }}
				/>
				<View style={styles.photoContainer}>
					<Image source={{ uri: img }} style={styles.img} />
				</View>
				{comments && <CommentsList comments={comments} />}
			</ScrollView>
			<View style={styles.inputCommentContainer}>
				<TextInput
					value={comment}
					onChangeText={addCommentInState}
					placeholder='Comment'
					style={[styles.inputComment]}
				/>
				<TouchableOpacity style={styles.sendComment} onPress={() => addCommentInBase()}>
					<SendCommentIcon color='#FF6C00' />
				</TouchableOpacity>
			</View>

			<StatusBar style='auto' />
		</SafeAreaView>
	);
}
