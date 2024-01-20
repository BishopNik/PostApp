/** @format */

import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Style';
import { CommentsIcon, CommentEmptyIcon, LocationIcon, LikeIcon } from '../Icons';
import { useAuth } from '../hooks';

function PostsList({ posts, onComment, onLike, onLocation, page, navigation }) {
	const { user } = useAuth();

	return (
		<View style={styles.postList}>
			{posts.map(
				({
					id,
					photoURL,
					title,
					comment,
					like,
					likeUsers = [],
					location,
					locationLatitude,
					locationLongitude,
				}) => (
					<View key={id} style={{ gap: 8 }}>
						<View style={styles.photoContainer}>
							<Image
								source={typeof photoURL === 'string' ? { uri: photoURL } : photoURL}
								style={styles.img}
								resizeMode='cover'
							/>
						</View>
						<Text style={styles.postPhotoTitle}>{title}</Text>
						<View style={styles.postDetail}>
							<View style={styles.postDetailFeedback}>
								<TouchableOpacity
									onPress={() => onComment(photoURL, id, navigation)}
									style={styles.postDetailItem}
								>
									{page ? <CommentsIcon /> : <CommentEmptyIcon />}
									<Text style={styles.linkText}>{comment}</Text>
								</TouchableOpacity>
								{page && (
									<TouchableOpacity
										style={styles.postDetailItem}
										onPress={() => onLike(id)}
									>
										<LikeIcon
											color={
												likeUsers.includes(user.id) ? '#FF6C00' : '#919191'
											}
										/>
										<Text style={styles.linkText}>{like}</Text>
									</TouchableOpacity>
								)}
							</View>
							<View style={styles.postDetailLocation}>
								<LocationIcon />
								<TouchableOpacity
									onPress={() =>
										onLocation(
											location,
											locationLatitude,
											locationLongitude,
											navigation
										)
									}
								>
									<Text
										style={[
											styles.linkText,
											{ textDecorationLine: 'underline' },
										]}
									>
										{location}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)
			)}
		</View>
	);
}

export default PostsList;
