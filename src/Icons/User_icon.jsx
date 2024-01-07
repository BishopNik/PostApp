/** @format */

import React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const UserIcon = ({ width = 70, height = 40, color = '#212121' }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 70 40' fill='none'>
			<G class='layer'>
				<Rect
					fill={color}
					height={height}
					id='Rectangle'
					rx={height / 2}
					width={width}
					x='-0.1'
					y='0.13'
				/>
				<Path
					d='m42.47,27.75l0,-2c0,-2.21 -1.79,-4 -4,-4l-8,0c-2.21,0 -4,1.79 -4,4l0,2'
					id='Shape'
					stroke={color === '#fff' ? '#000' : '#fff'}
				/>
				<Path
					d='m34.47,17.75c2.21,0 4,-1.79 4,-4c0,-2.21 -1.79,-4 -4,-4c-2.21,0 -4,1.79 -4,4c0,2.21 1.79,4 4,4z'
					id='Oval'
					stroke={color === '#fff' ? '#000' : '#fff'}
				/>
			</G>
		</Svg>
	);
};

export default UserIcon;
