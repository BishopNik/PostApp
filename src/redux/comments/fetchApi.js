/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	addDoc,
	getDoc,
	getDocs,
	updateDoc,
	collection,
	increment,
	doc,
	arrayUnion,
} from 'firebase/firestore';
import { db } from '../../../config';
import { addCommentInState, addLikeInState } from '../posts/postsSlice';

export const fetchAllComments = createAsyncThunk(
	'tasks/fetchAllComments',
	async ({ idPost }, thunkAPI) => {
		try {
			const snapshot = await getDocs(collection(db, `comments_${idPost}`));
			const comments = [];
			snapshot.forEach(doc => {
				const comment = { id: doc.id, ...doc.data() };
				if (comment) comments.unshift(comment);
			});
			return comments;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addComment = createAsyncThunk(
	'tasks/addComment',
	async ({ user, idPost, comment }, thunkAPI) => {
		try {
			const newComment = {
				userId: user.id,
				userlLogo: user.photoURL,
				text: comment,
				data: Date.now(),
			};

			const docRef = await addDoc(collection(db, `comments_${idPost}`), newComment);

			await updateDoc(doc(db, 'posts', idPost), {
				comment: increment(1),
			});

			thunkAPI.dispatch(addCommentInState({ idPost }));

			return { id: docRef.id, ...newComment };
		} catch (error) {
			console.error(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addLike = createAsyncThunk('tasks/addLike', async ({ user, id }, thunkAPI) => {
	try {
		const postRef = doc(db, 'posts', id);

		const postDoc = await getDoc(postRef);
		const post = postDoc.data();

		if (!post.likeUsers.includes(user.id)) {
			await updateDoc(postRef, {
				like: increment(1),
				likeUsers: arrayUnion(user.id),
			});
		}

		thunkAPI.dispatch(addLikeInState({ idPost: id, userId: user.id }));

		return;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
