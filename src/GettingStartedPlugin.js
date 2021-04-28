import React from 'react';
import { VERSION, Tab } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';
import CustomChatHistoryList from './components/CustomChatHistory/CustomChatHistoryList';
import CustomEndChatButton from './components/CustomEndChatButton/CustomEndChatButton';

const PLUGIN_NAME = 'GettingStartedPlugin';

export default class GettingStartedPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    this.registerReducers(manager);

    const options = { sortOrder: -1 };
    flex.AgentDesktopView
      .Panel1
      .Content
      .add(<CustomTaskListContainer key="demo-component" />, options);

      flex.CRMContainer.defaultProps.uriCallback = (task) => {
        let url = 'http://bing.com';
        console.log('MyTask', task);
        if (task) {
          console.log(task.attributes);
          switch(task.attributes.userAccountType) {
            case '1':
              url = 'https://www.bing.com/images/search?q='+task.attributes.name;
              break;
            case '2':
              url = 'https://www.twilio.com/docs/flex';
              break;
          }
        }
        return url;
      }
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
