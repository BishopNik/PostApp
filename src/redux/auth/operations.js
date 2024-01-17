/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config';

export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkAPI) => {
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
	// Reading the token from the state via getState()
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	if (persistedToken === null) {
		// If there is no token, exit without performing any request
		return thunkAPI.rejectWithValue('Unable to fetch user');
	}

	try {
		// If there is a token, add it to the HTTP header and perform the request
		setAuthHeader(persistedToken);
		const res = 'await axios.get(';
		return res;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
