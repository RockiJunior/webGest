import React, { createContext, useState } from 'react';

export const TabContext = createContext();

export const TabContainer = ({ tab = '', children }) => {
	const [ activeTab, setActiveTab ] = useState(tab);
	const initialTab = { activeTab, setActiveTab };

	return (
		<TabContext.Provider value={initialTab}>
			{children}
		</TabContext.Provider>
	);

};

