/** @format */

const options = route => {
	return {
		tabBarShowLabel: false,
		tabBarStyle: {
			display: route.name === 'Create' ? 'none' : 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			rowGap: 39,
			paddingBottom: 22,
			paddingTop: 9,
			paddingLeft: 82,
			paddingRight: 82,
			borderTopColor: '#BDBDBD',
			borderTopWidth: 1,
			height: 80,
		},
		tabBarItemStyle: {},
	};
};

export default options;
