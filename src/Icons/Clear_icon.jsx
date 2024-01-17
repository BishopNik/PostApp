/** @format */

import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const ClearIcon = ({ size = 25, color = '#BDBDBD' }) => {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 25 25'
			fill='none'
		>
			<Circle
				cx='11.4999'
				cy='12.5'
				r='12'
				transform='rotate(-45 11.4999 12.5)'
				fill='white'
				stroke='#E8E8E8'
			/>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8.75735 7.65027L8.05025 8.35736L12.2929 12.5999L8.05025 16.8425L8.75735 17.5496L12.9999 13.307L17.2425 17.5496L17.9496 16.8425L13.707 12.5999L17.9496 8.35736L17.2425 7.65027L12.9999 11.8929L8.75735 7.65027Z'
				fill={color}
			/>
		</Svg>
	);
};

export default ClearIcon;
