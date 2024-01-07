/** @format */

import { StyleSheet } from 'react-native';

const commonTextStyle = {
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: 16,
	lineHeight: 20,
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(208, 211, 217, 0.90)',
	},
	rootContainer: {
		width: '100%',
		height: '100%',
		backgroundColor: '#fff',
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	avatarContainer: {
		position: 'absolute',
		top: '0',
		left: '50%',
		transform: [{ translateX: -50 }, { translateY: -50 }],
		width: 120,
		height: 120,
		backgroundColor: '#F6F6F6',
		borderRadius: 16,
	},
	addAvatar: {
		width: 25,
		height: 25,
		position: 'absolute',
		right: 0,
		bottom: 13,
		transform: [{ translateX: 12.5 }],
	},
	title: {
		...commonTextStyle,
		textAlign: 'center',
		marginBottom: 32,
		color: '#212121',
		textAlign: 'center',
		fontSize: 30,
		lineHeight: 30,
		fontWeight: '500',
		letterSpacing: 0.3,
		marginBottom: 32,
	},
	form: {
		backgroundColor: '#fff',
		width: '100%',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingTop: 32,
		paddingLeft: 16,
		paddingRight: 16,
	},
	formReg: {
		position: 'relative',
		backgroundColor: '#fff',
		width: '100%',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingTop: 92,
		paddingLeft: 16,
		paddingRight: 16,
	},
	inputBox: {
		display: 'flex',
		gap: 16,
		marginBottom: 43,
	},
	inputPassContainer: {
		position: 'relative',
	},
	input: {
		...commonTextStyle,
		width: '100%',
		height: 50,
		backgroundColor: '#F6F6F6',
		borderColor: '#E8E8E8',
		borderWidth: 1,
		borderRadius: 12,
		color: '#BDBDBD',
		padding: 16,
	},
	focusedInput: {
		borderColor: '#FF6C00',
	},
	showPasswordButton: {
		position: 'absolute',
		right: 16,
		top: 16,
	},
	showPasswordText: {
		...commonTextStyle,
		color: '#1B4371',
		textAlign: 'right',
	},
	buttonBox: {
		display: 'flex',
		gap: 16,
		paddingBottom: 132,
	},
	button: {
		backgroundColor: '#FF6C00',
		borderRadius: 100,
	},
	buttonText: {
		...commonTextStyle,
		color: '#FFF',
		textAlign: 'center',
		paddingTop: 16,
		paddingLeft: 32,
		paddingRight: 32,
		paddingBottom: 16,
	},
	singupLink: {
		width: '100%',
	},
	signup: {
		...commonTextStyle,
		color: '#1B4371',
		textAlign: 'center',
	},
	mainTitle: {
		position: 'relative',
		paddingTop: 11,
		paddingBottom: 11,
		borderBottomColor: '#BDBDBD',
		borderBottomWidth: 1,
	},
	mainText: {
		...commonTextStyle,
		color: '#212121',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 500,
		lineHeight: 22,
		letterSpacing: -0.408,
	},
	quitButton: {
		position: 'absolute',
		right: 16,
		top: 11,
	},
	backButton: {
		position: 'absolute',
		left: 16,
		top: 11,
	},
	postContainer: {
		paddingTop: 32,
		paddingBottom: 32,
		paddingLeft: 16,
		paddingRight: 16,
	},
	post: {
		...commonTextStyle,
		color: '#212121',
		fontSize: 13,
		fontWeight: 700,
		textAlign: 'left',
	},
	avatarImg: {
		width: 60,
		height: 60,
	},
	userContainer: {
		display: 'flex',
		flexDirection: 'row',
		columnGap: 8,
		alignItems: 'center',
		marginBottom: 10,
	},
	user: {},
	userName: {
		color: '#212121',
		fontSize: 13,
		fontWeight: '700',
	},
	userEmail: {
		...commonTextStyle,
		color: 'rgba(33, 33, 33, 0.80)',
		fontSize: 11,
	},
});

export default styles;
