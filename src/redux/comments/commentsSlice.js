/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { fetchAllComments, addComment } from './fetchApi';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
		},
		resetState: state => {
			state.items = [];
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllComments.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAllComments.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = payload;
			})
			.addCase(fetchAllComments.rejected, (state, _) => {
				state.isLoading = false;
				state.error = 'Error loaded comments ...';
			})
			.addCase(addComment.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addComment.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = [payload, ...state.items];
			})
			.addCase(addComment.rejected, (state, _) => {
				state.isLoading = false;
				state.error = 'Error created comment...';
			});
	},
});

export const commentsReducer = commentsSlice.reducer;

export const { resetError, resetState } = commentsSlice.actions;
