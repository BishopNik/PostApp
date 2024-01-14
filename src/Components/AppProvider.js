/** @format */

import React, { createContext, useContext, useState } from 'react';
import postsExample from '../Utils/postsExample';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [posts, setPosts] = useState(postsExample);

	const contextValue = {
		posts,
		setPosts,
	};

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
