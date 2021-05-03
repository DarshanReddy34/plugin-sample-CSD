import React from "react";
import { VERSION, Tab, ModalPopup } from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import CustomTaskListContainer from "./components/CustomTaskList/CustomTaskList.Container";
import reducers, { namespace } from "./states";
import CustomChatHistoryList from "./components/CustomChatHistory/CustomChatHistoryList";
import CustomEndChatButton from "./components/CustomEndChatButton/CustomEndChatButton";

const PLUGIN_NAME = "GettingStartedPlugin";

export default class GettingStartedPlugin extends FlexPlugin {
	serviceUsers = undefined;

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
		// fetch list of conversations
		const conversationsList = [
			{
				unique_name: null,
				members_count: 1,
				date_updated: "2021-04-21T19:31:40Z",
				friendly_name: "Flex WebChat",
				created_by: "system",
				account_sid: "AC387561c4b89e34f8eac3cc85e79f9223",
				url:
					"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH0268e8d97e984e4fa44ec8288b35f816",
				date_created: "2021-04-21T19:26:44Z",
				sid: "CH0268e8d97e984e4fa44ec8288b35f816",
				attributes:
					'{"pre_engagement_data":{"friendlyName":"Anonymous","uuid":"mKH81TVK0laEmRaA","location":"http://localhost:8081/"},"from":"Anonymous","channel_type":"web","status":"INACTIVE","long_lived":false}',
				service_sid: "IS1593227395fb41cbb594755ec12cbb04",
				type: "private",
				messages_count: 1,
				links: {
					webhooks:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH0268e8d97e984e4fa44ec8288b35f816/Webhooks",
					messages:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH0268e8d97e984e4fa44ec8288b35f816/Messages",
					invites:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH0268e8d97e984e4fa44ec8288b35f816/Invites",
					members:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH0268e8d97e984e4fa44ec8288b35f816/Members",
					last_message:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH0268e8d97e984e4fa44ec8288b35f816/Messages/IM75890361e8cf401b847fa9e24e35b1b0",
				},
			},
			{
				unique_name: null,
				members_count: 1,
				date_updated: "2021-04-22T10:09:51Z",
				friendly_name: "Flex WebChat",
				created_by: "system",
				account_sid: "AC387561c4b89e34f8eac3cc85e79f9223",
				url:
					"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH05484c3aba584f26a98d8931311ada50",
				date_created: "2021-04-22T10:05:29Z",
				sid: "CH05484c3aba584f26a98d8931311ada50",
				attributes:
					'{"pre_engagement_data":{"friendlyName":"Alex Abonn","accountType":1,"location":"http://localhost:8081/"},"from":"Alex Abonn","channel_type":"web","status":"INACTIVE","long_lived":false}',
				service_sid: "IS1593227395fb41cbb594755ec12cbb04",
				type: "private",
				messages_count: 2,
				links: {
					webhooks:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH05484c3aba584f26a98d8931311ada50/Webhooks",
					messages:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH05484c3aba584f26a98d8931311ada50/Messages",
					invites:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH05484c3aba584f26a98d8931311ada50/Invites",
					members:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH05484c3aba584f26a98d8931311ada50/Members",
					last_message:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH05484c3aba584f26a98d8931311ada50/Messages/IM9ee4b8ad1ba54c3f9a8082417ab34e5a",
				},
			},
			{
				unique_name: null,
				members_count: 1,
				date_updated: "2021-04-22T08:54:23Z",
				friendly_name: "Flex WebChat",
				created_by: "system",
				account_sid: "AC387561c4b89e34f8eac3cc85e79f9223",
				url:
					"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH061133acd2224fd399405b515c15b8e9",
				date_created: "2021-04-22T08:25:53Z",
				sid: "CH061133acd2224fd399405b515c15b8e9",
				attributes:
					'{"pre_engagement_data":{"friendlyName":"Jane Doe","accountType":2,"location":"http://localhost:8081/"},"from":"Jane Doe","channel_type":"web","status":"INACTIVE","long_lived":false}',
				service_sid: "IS1593227395fb41cbb594755ec12cbb04",
				type: "private",
				messages_count: 1,
				links: {
					webhooks:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH061133acd2224fd399405b515c15b8e9/Webhooks",
					messages:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH061133acd2224fd399405b515c15b8e9/Messages",
					invites:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH061133acd2224fd399405b515c15b8e9/Invites",
					members:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH061133acd2224fd399405b515c15b8e9/Members",
					last_message:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH061133acd2224fd399405b515c15b8e9/Messages/IM9aa1b04a610b48a29ad385d046614e6a",
				},
			},
			{
				unique_name: null,
				members_count: 1,
				date_updated: "2021-04-23T11:40:26Z",
				friendly_name: "Flex WebChat",
				created_by: "system",
				account_sid: "AC387561c4b89e34f8eac3cc85e79f9223",
				url:
					"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH11755f7580a1409a91c86ae2de51ffa4",
				date_created: "2021-04-23T11:39:57Z",
				sid: "CH11755f7580a1409a91c86ae2de51ffa4",
				attributes:
					'{"pre_engagement_data":{"friendlyName":"Alex Abonn","accountType":1,"location":"http://localhost:8081/"},"from":"Alex Abonn","channel_type":"web","status":"INACTIVE","long_lived":false}',
				service_sid: "IS1593227395fb41cbb594755ec12cbb04",
				type: "private",
				messages_count: 1,
				links: {
					webhooks:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH11755f7580a1409a91c86ae2de51ffa4/Webhooks",
					messages:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH11755f7580a1409a91c86ae2de51ffa4/Messages",
					invites:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH11755f7580a1409a91c86ae2de51ffa4/Invites",
					members:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH11755f7580a1409a91c86ae2de51ffa4/Members",
					last_message:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH11755f7580a1409a91c86ae2de51ffa4/Messages/IMf04e17d428034680b87ff05300420fc9",
				},
			},
			{
				unique_name: null,
				members_count: 1,
				date_updated: "2021-04-22T10:09:58Z",
				friendly_name: "Flex WebChat",
				created_by: "system",
				account_sid: "AC387561c4b89e34f8eac3cc85e79f9223",
				url:
					"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH12012365d1394c7ea2ff4d45df782aec",
				date_created: "2021-04-22T08:26:39Z",
				sid: "CH12012365d1394c7ea2ff4d45df782aec",
				attributes:
					'{"pre_engagement_data":{"friendlyName":"Alex Abonn","accountType":2,"location":"http://localhost:8081/"},"from":"Alex Abonn","channel_type":"web","status":"INACTIVE","long_lived":false}',
				service_sid: "IS1593227395fb41cbb594755ec12cbb04",
				type: "private",
				messages_count: 1,
				links: {
					webhooks:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH12012365d1394c7ea2ff4d45df782aec/Webhooks",
					messages:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH12012365d1394c7ea2ff4d45df782aec/Messages",
					invites:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH12012365d1394c7ea2ff4d45df782aec/Invites",
					members:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH12012365d1394c7ea2ff4d45df782aec/Members",
					last_message:
						"https://chat.twilio.com/v2/Services/IS1593227395fb41cbb594755ec12cbb04/Channels/CH12012365d1394c7ea2ff4d45df782aec/Messages/IMc3471d2c5a1b4ae889630a08481e15f0",
				},
			},
		];

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
		flex.TaskCanvasTabs.Content.add(
			<Tab label='History' key='new-custom-tab'>
				<CustomChatHistoryList
					key='custom-chat-history-component'
					conversations={conversationsList}
				/>
			</Tab>
		);

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
