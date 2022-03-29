import { ListTabs } from "./listTabs.js";
import {
  GlobalContainer,
  TabHeaderContainer,
  TabPanelContainer,
  TabPanelItem
} from "./styles";
import {TabContainer} from "./TabContainer/TabContainer.jsx";
import TabHeader from './TabHeaders/TabHeader.jsx'
import TabPanel from "./TabPanel/TabPanel.jsx";

const Tab = () => {
  return (
    <div className="container">
      <GlobalContainer>
        <TabContainer tab={ListTabs[0].title}>
          <TabHeaderContainer>
            {ListTabs?.map(({ id, title }) => (
              <TabHeader title={title} key={id}>
                {title}
              </TabHeader>
            ))}
          </TabHeaderContainer>
          <TabPanelContainer>
            {ListTabs?.map(({ id, title, description }) => (
              <TabPanel whenActive={title} key={id}>
                <TabPanelItem>{description}</TabPanelItem>
              </TabPanel>
            ))}
          </TabPanelContainer>
        </TabContainer>
      </GlobalContainer>
    </div>
  );
};

export default Tab;