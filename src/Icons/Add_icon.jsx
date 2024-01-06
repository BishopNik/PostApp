/** @format */

import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

const AddIcon = ({ size = 25, color = '#FF6C00' }) => {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 25 25'
			fill='none'
		>
			<Circle cx='12.5' cy='12.5' r='12' stroke={color} strokeWidth='1' fill='white' />
			<Path d='M12.5 1.5L12 2V12H2V13H12V23.5H12.5V13H22.5V12H12.5V1.5Z' fill='#FF6C00' />
		</Svg>
	);
};

export default AddIcon;
