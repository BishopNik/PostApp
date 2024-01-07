/** @format */

import React from 'react';
import { Svg, Path } from 'react-native-svg';

const BackIcon = ({ width = 24, height = 24, color = '#212121' }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
			<Path
				d='M20 12H4'
				stroke={color}
				strokeOpacity='0.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M10 18L4 12L10 6'
				stroke={color}
				strokeOpacity='0.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
};

export default BackIcon;
