import React, { useContext } from 'react';
import {TabContext}  from '../TabContainer/TabContainer.jsx';
import { TabHeaderItem } from '../styles';

const TabHeader = ({title, children}) => {
	const context = useContext(TabContext);    
    const isActive = title === context?.activeTab;
    
    const handleActive = () => {
        context?.setActiveTab(title);
    }
    return (
        <TabHeaderItem isActive={isActive} onClick={handleActive}>
            {children}
        </TabHeaderItem>
    )
};

export default TabHeader;
