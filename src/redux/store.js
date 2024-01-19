/** @format */

import { configureStore } from '@reduxjs/toolkit';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from './auth/authSlice';
import { postsReducer } from './posts/postsSlice';
import { commentsReducer } from './comments/commentsSlice';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['root'],
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		comments: commentsReducer,
		auth: authPersistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
