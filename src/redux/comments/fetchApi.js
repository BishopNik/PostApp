/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../../config';

export const fetchAllComments = createAsyncThunk(
	'tasks/fetchAllComments',
	async ({ idPost }, thunkAPI) => {
		try {
			const snapshot = await getDocs(collection(db, `comments_${idPost}`));
			const comments = [];
			snapshot.forEach(doc => {
				const comment = { id: doc.id, ...doc.data() };
				comments.unshift(comment);
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

			return { id: docRef.id, ...newComment };
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
