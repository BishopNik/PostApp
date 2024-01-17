/** @format */

// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyASyoM_Enh6jQEfVxqUH08UrldRsS_2pqc',
	authDomain: 'postsapp-mob.firebaseapp.com',
	projectId: 'postsapp-mob',
	databaseURL: 'https://postsapp-mob.firebaseio.com',
	storageBucket: 'postsapp-mob.appspot.com',
	messagingSenderId: '111316134239',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
