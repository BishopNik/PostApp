/** @format */

import React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const GridIcon = ({ size = 24, color = '#212121' }) => {
	return (
		<Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
			<G id='feather-icon / grid'>
				<Rect width='24' height='24' fill='white' />
				<Path
					id='Rectangle-path'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3 3H10V10H3V3Z'
					stroke={color}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					id='Rectangle-path_2'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M14 3H21V10H14V3Z'
					stroke={color}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					id='Rectangle-path_3'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M14 14H21V21H14V14Z'
					stroke={color}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					id='Rectangle-path_4'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3 14H10V21H3V14Z'
					stroke={color}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</G>
		</Svg>
	);
};

export default GridIcon;
