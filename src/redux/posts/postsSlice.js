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
		addCommentInState: (state, { payload }) => {
			state.items = state.items.map(post => {
				if (post.id == payload.idPost) {
					return { ...post, comment: post.comment + 1 };
				}
				return post;
			});
		},
		addLikeInState: (state, { payload }) => {
			state.items = state.items.map(post => {
				if (post.id == payload.idPost && !post.likeUsers.includes(payload.userId)) {
					return {
						...post,
						like: post.like + 1,
						likeUsers: [...post.likeUsers, payload.userId],
					};
				}
				return post;
			});
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

export const { resetError, addCommentInState, addLikeInState } = postsSlice.actions;
