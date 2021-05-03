import React from "react";
import { VERSION, Tab, ModalPopup } from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import CustomTaskListContainer from "./components/CustomTaskList/CustomTaskList.Container";
import reducers, { namespace } from "./states";
import CustomChatHistoryList from "./components/CustomChatHistory/CustomChatHistoryList";
import CustomEndChatButton from "./components/CustomEndChatButton/CustomEndChatButton";

const PLUGIN_NAME = "GettingStartedPlugin";

export default class GettingStartedPlugin extends FlexPlugin {
	conversationsList = undefined;

	constructor() {
		super(PLUGIN_NAME);
	}

	fetchConv() {
		var headers = {
			Authorization:
				"Basic QUMzODc1NjFjNGI4OWUzNGY4ZWFjM2NjODVlNzlmOTIyMzozODAzNjdhOWMxOTI3OTYxYzRkZjA5ZWEyMzA2NjMyOQ==",
		};
		return fetch(
			"https://conversations.twilio.com/v1/Services/IS1593227395fb41cbb594755ec12cbb04/Conversations",
			{ headers: headers }
		);
	}

	/**
	 * This code is run when your plugin is being started
	 * Use this to modify any UI components or attach to the actions framework
	 *
	 * @param flex { typeof import('@twilio/flex-ui') }
	 * @param manager { import('@twilio/flex-ui').Manager }
	 */
	init(flex, manager) {
		// fetch list of conversations
		this.conversationsList = this.fetchConv();

		// manager.strings.ChatWelcomeText = "Hi, Iam a custom welcome message";
		// manager.strings.Today = 'Custom Today';
		// manager.strings.Yesterday = 'Custom Yesterday';
		// manager.strings.TypingIndicator = "{0} is typing ... ";
		flex.MessagingCanvas.defaultProps.showWelcomeMessage = true;

		this.registerReducers(manager);

		const options = { sortOrder: -1 };
		// flex.AgentDesktopView
		//   .Panel1
		//   .Content
		//   .add(<CustomTaskListContainer key="demo-component" />, options);

		flex.CRMContainer.defaultProps.uriCallback = (task) => {
			let url = "http://bing.com";
			console.log("MyTask", task);
			if (task) {
				console.log(task.attributes);
				switch (task.attributes.userAccountType) {
					case "1":
						url =
							"https://www.bing.com/images/search?q=" + task.attributes.name;
						break;
					case "2":
						url = "https://www.twilio.com/docs/flex";
						break;
				}
			}
			return url;
		};

		/*
		 * Adds custom History Tab for TaskCanvasTabs
		 */
		this.fetchConv().then((data) => {
			// 	const conversationsList = await resp.json();
			// console.log("conversationsList", conversationsList);
			// return conversationsList.conversations;
			const responseJSON = data.json();
			this.conversationsList = responseJSON.conversations;
			flex.TaskCanvasTabs.Content.add(
				<Tab label='History' key='new-custom-tab'>
					<CustomChatHistoryList key='custom-chat-history-component' />
				</Tab>
			);
		});

		/*
		 * Adds custo history  list on top of MessageList
		 */
		// flex.MessagingCanvas.MessageList.Content.add(
		//   <CustomChatHistoryList key="custom-chat-history-component" />,
		//   options
		// );

		// flex.TaskCanvasHeader.Content.remove("actions");

		// flex.TaskCanvasHeader.Content.replace(
		//   <CustomEndChatButton key="actions" />
		// )

		// flex.TaskCanvasHeader.defaultProps.titleTemplateCode = "Hi there";

		// flex.TaskCanvasHeader.defaultProps.secondLineTemplateCode = "Offline";

		/*
		 * Overrites the End chat button functionality
		 * refer to https://www.twilio.com/docs/flex/developer/ui/actions#sending-a-message-after-a-task-is-completed
		 */
		flex.Actions.replaceAction("WrapupTask", (payload, original) => {
			// Only alter chat tasks:
			if (payload.task.taskChannelUniqueName !== "chat") {
				original(payload);
			} else {
				console.log("end chat", payload);
				const channelSid = payload.task.attributes.channelSid;
				alert(
					`Thanks for chatting. Your session is now closed. Please rate your feed back. Channel SID: ${channelSid}`
				);
				// original(payload); // this line is used to end the chat
			}
		});

		/*
		 * Overrites the Complete chat button functionality
		 */
		flex.Actions.replaceAction("CompleteTask", (payload, original) => {
			// Only alter chat tasks:
			if (payload.task.taskChannelUniqueName !== "chat") {
				original(payload);
			} else {
				console.log("complete chat", payload);
				const channelSid = payload.task.attributes.channelSid;
				alert(`Complete Chat Channel SID: ${channelSid}`);
				// original(payload); // this line is used to complete the chat
			}
		});

		/*
		 * Remove Info Tab from TaskCanvasTab
		 */
		flex.TaskCanvasTabs.Content.remove("info");
	}

	/**
	 * Registers the plugin reducers
	 *
	 * @param manager { Flex.Manager }
	 */
	registerReducers(manager) {
		if (!manager.store.addReducer) {
			// eslint: disable-next-line
			console.error(
				`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`
			);
			return;
		}

		manager.store.addReducer(namespace, reducers);
	}
}
