/** @format */

import { useSelector } from 'react-redux';
import {
	selectUser,
	selectIsLoggedIn,
	selectIsRefreshing,
	statusUserError,
	selectToken,
} from '../redux/auth/selectors';

export const useAuth = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isRefreshing = useSelector(selectIsRefreshing);
	const user = useSelector(selectUser);
	const statusUser = useSelector(statusUserError);
	const token = useSelector(selectToken);

	return {
		isLoggedIn,
		isRefreshing,
		user,
		statusUser,
		token,
	};
};
