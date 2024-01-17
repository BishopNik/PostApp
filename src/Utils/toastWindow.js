/** @format */

import Toast from 'react-native-toast-message';

export function toastWindow(mes) {
	Toast.show({
		type: 'error',
		text1: mes,
		icon: '❌',
	});
}
