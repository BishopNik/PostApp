/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { fetchAllPosts, addPost } from './fetchApi';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllPosts.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = payload;
			})
			.addCase(fetchAllPosts.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(addPost.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addPost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = [payload, ...state.items];
			})
			.addCase(addPost.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			});
	},
});

export const postsReducer = postsSlice.reducer;

export const { resetError } = postsSlice.actions;
