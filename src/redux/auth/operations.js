/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import uploadImageAsync from '../../Utils/downloadImg';
import { auth, db } from '../../../config';

export const register = createAsyncThunk(
	'auth/register',
	async ({ email, password, login, photo }, thunkAPI) => {
		try {
			// Регистрация пользователя
			const { _tokenResponse, user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			// Получение идентификатора пользователя
			const userId = user.uid;

			// Получение URL загруженного файла
			const downloadURL = photo ? await uploadImageAsync(photo, userId, 'user-profiles') : '';

			await updateProfile(user, {
				displayName: login,
				photoURL: downloadURL,
			});

			await addDoc(collection(db, 'users'), {
				id: userId,
				name: login,
				photoURL: downloadURL,
			});

			const resp = {
				user: {
					id: userId,
					displayName: login,
					email: email,
					photoURL: downloadURL,
				},
				token: _tokenResponse.idToken,
			};

			return resp;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logIn = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
	try {
		const { _tokenResponse, user } = await signInWithEmailAndPassword(auth, email, password);
		const resp = {
			user: {
				id: user.uid,
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
			},
			token: _tokenResponse.idToken,
		};
		return resp;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await auth.signOut();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	if (persistedToken === null) {
		return thunkAPI.rejectWithValue('Unable to fetch user');
	}

	try {
		auth().currentUser.getIdToken(true);
	} catch (error) {
		console.error(error);
		return thunkAPI.rejectWithValue(error.message);
	}
});
