/** @format */

import React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const GridIcon = ({ width = 70, height = 40, color = '#FF6C00' }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 70 40' fill='none'>
			<G id='feather-icon / grid'>
				<Rect id='Rectangle' width={width} height={height} rx={20} fill={color} />
				<Path
					id='Rectangle-path'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M26.5 11.5H33.5V18.5H26.5V11.5Z'
					stroke={color === '#fff' ? '#000' : '#fff'}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>

				<Path
					id='Rectangle-path_2'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M37.5 11.5H44.5V18.5H37.5V11.5Z'
					stroke={color === '#fff' ? '#000' : '#fff'}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>

				<Path
					id='Rectangle-path_3'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M37.5 22.5H44.5V29.5H37.5V22.5Z'
					stroke={color === '#fff' ? '#000' : '#fff'}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>

				<Path
					id='Rectangle-path_4'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M26.5 22.5H33.5V29.5H26.5V22.5Z'
					stroke={color === '#fff' ? '#000' : '#fff'}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</G>
		</Svg>
	);
};

export default GridIcon;
