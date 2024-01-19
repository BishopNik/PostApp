/** @format */

import { useSelector } from 'react-redux';
import {
	commentsState,
	statusLoadingStateComments,
	statusErrorComments,
} from '../redux/comments/selectors';

export const useComments = () => {
	const isLoadingComments = useSelector(statusLoadingStateComments);
	const statusComments = useSelector(statusErrorComments);
	const comments = useSelector(commentsState);

	return {
		isLoadingComments,
		statusComments,
		comments,
	};
};
