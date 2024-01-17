/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../../config';
import uploadImageAsync from '../../Utils/downloadImg';

export const fetchAllPosts = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
	try {
		const snapshot = await getDocs(collection(db, 'posts'));
		const posts = [];
		snapshot.forEach(doc => {
			const post = { id: doc.id, ...doc.data() };
			posts.unshift(post);
		});
		return posts;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const addPost = createAsyncThunk(
	'tasks/addPost',
	async ({ user, photo, name, location }, thunkAPI) => {
		try {
			const downloadURL = photo ? await uploadImageAsync(photo, user.id, 'posts') : '';

			if (downloadURL === '') {
				throw new Error('Error creating post...');
			}

			const post = {
				userId: user.id,
				photoURL: downloadURL,
				title: name,
				comment: 0,
				like: 0,
				location: location.city + ', ' + location.country,
				locationLatitude: location.latitude,
				locationLongitude: location.longitude,
			};

			await addDoc(collection(db, 'posts'), post);

			return post;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
