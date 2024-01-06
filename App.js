/** @format */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './src/Style';
import { GridIcon, NewIcon, UserIcon, LogoutIcon } from './src/Icons';
import Navigation from './src/Page/Navgation';

export default function App() {
	return <Navigation />;
}
