/** @format */

import { createSelector } from 'reselect';
import { selectUser } from '../auth/selectors';

export const postsState = state => state.posts.items;

export const statusLoadingState = state => state.posts.isLoading;

export const statusError = state => state.posts.error;

export const postsSelfState = createSelector([postsState, selectUser], (posts, user) => {
	if (posts.length === 0) return [];

	const selfPosts = posts.filter(post => post.userId === user.id);
	const mappedPosts = selfPosts.map(post => ({ id: post.id, ...post }));
	const reversedPosts = [...mappedPosts].reverse();
	return reversedPosts;
});
