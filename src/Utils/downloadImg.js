/** @format */

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config';

const uploadImageAsync = async (uri, userId, folder) => {
	try {
		// Загружаем изображение с использованием XMLHttpRequest
		const blob = await new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = function () {
				resolve(xhr.response);
			};
			xhr.onerror = function () {
				reject(new TypeError('Network request failed'));
			};
			xhr.responseType = 'blob';
			xhr.open('GET', uri, true);
			xhr.send(null);
		});

		// Определение пути в хранилище Firebase
		const storageRef = ref(storage, `${folder}/${userId}_${Date.now()}/photo.jpg`);

		// // Загрузка блоба в Firebase Storage
		const snapshot = await uploadBytes(storageRef, blob);

		// // Получение URL загруженного файла
		const url = await getDownloadURL(snapshot.ref);

		// Закрываем и освобождаем блоб
		blob.close();

		return url;
	} catch (error) {
		console.error('Ошибка при загрузке изображения:', error);
		throw error; // Можно обработать ошибку дальше или просто пробросить её
	}
};

export default uploadImageAsync;
