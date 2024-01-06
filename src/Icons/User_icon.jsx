/** @format */

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const UserIcon = ({ width = 24, height = 24, color = '#212121' }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
			<G id='feather-icon / user'>
				<Path
					id='Shape'
					d='M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21'
					stroke={color}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<Path
					id='Oval'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
					stroke={color}
					strokeOpacity='0.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</G>
		</Svg>
	);
};

export default UserIcon;
