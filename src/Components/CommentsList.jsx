/** @format */

import React, { useRef } from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import { styles } from '../Style';
import { useAuth } from '../hooks';
import { formatTimestamp } from '../Utils/timestamp';

function CommentsList({ comments }) {
	const { user } = useAuth();
	const scrollViewRef = useRef();

	if (comments.length === 0) {
		return null;
	}
	const sortedComments = comments.slice().sort((a, b) => a.data - b.data);

	return (
		<ScrollView
			style={{ flex: 1 }}
			ref={scrollViewRef}
			onContentSizeChange={() => {
				scrollViewRef.current.scrollToEnd({ animated: true });
			}}
		>
			{sortedComments.map(({ id, userId, userlLogo, text, data = 0 }, index, array) => (
				<View
					key={id}
					style={{
						...styles.userComment,
						...(user.id === userId ? styles.userCommentMirror : null),
						marginBottom: index === array.length - 1 ? 12 : 24,
					}}
				>
					<View style={styles.userIcon}>
						<Image source={{ uri: userlLogo }} />
					</View>
					<View style={styles.userCommentTextBox}>
						<Text style={styles.userCommentText}>{text}</Text>
						<Text style={styles.timeComment}>{formatTimestamp(data)}</Text>
					</View>
				</View>
			))}
		</ScrollView>
	);
}

export default CommentsList;
