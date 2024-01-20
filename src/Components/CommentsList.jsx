/** @format */

import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../Style';
import { useAuth } from '../hooks';
import { formatTimestamp } from '../Utils/timestamp';

function CommentsList({ comments }) {
	const { user } = useAuth();

	if (comments.length === 0) {
		return null;
	}
	const sortedComments = comments.slice().sort((a, b) => a.data - b.data);

	return (
		<View style={{ gap: 24 }}>
			{sortedComments.map(({ id, userId, userlLogo, text, data = 0 }) => (
				<View
					key={id}
					style={{
						...styles.userComment,
						...(user.id === userId ? styles.userCommentMirror : null),
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
		</View>
	);
}

export default CommentsList;
