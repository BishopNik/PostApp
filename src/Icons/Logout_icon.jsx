/** @format */

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const LogoutIcon = ({ width = 24, height = 24, color = '#BDBDBD' }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
			<G id='feather-icon / log-out'>
				<Path
					id='Shape'
					d='M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10'
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					id='Shape_2'
					d='M17 16L21 12L17 8'
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					id='Shape_3'
					d='M21 12H9'
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</G>
		</Svg>
	);
};

export default LogoutIcon;
