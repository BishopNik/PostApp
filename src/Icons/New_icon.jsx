/** @format */

import React from 'react';
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

const NewIcon = ({ width = 70, height = 40, color = '#FF6C00' }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 70 40' fill='none'>
			<G id='40 / Toolbar / new' clipPath='url(#clip0_12_109)'>
				<Rect id='Rectangle' width={width} height={height} rx={20} fill={color} />
				<Path
					id='Union'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z'
					fill={color === '#fef2e4' ? '#000' : '#fff'}
				/>
			</G>
			<Defs>
				<ClipPath id='clip0_12_109'>
					<Rect width={width} height={height} fill='white' />
				</ClipPath>
			</Defs>
		</Svg>
	);
};

export default NewIcon;
