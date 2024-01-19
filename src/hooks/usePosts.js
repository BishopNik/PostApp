/** @format */

import { useSelector } from 'react-redux';
import {
	postsState,
	statusLoadingState,
	statusError,
	postsSelfState,
} from '../redux/posts/selectors';

export const usePosts = () => {
	const isLoadingPosts = useSelector(statusLoadingState);
	const statusPosts = useSelector(statusError);
	const posts = useSelector(postsState);
	const postsSelf = useSelector(postsSelfState);

	return {
		isLoadingPosts,
		statusPosts,
		posts,
		postsSelf,
	};
};
