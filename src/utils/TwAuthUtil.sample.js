const accountSid = "";
const authToken = "";

const TwAuthUtil = {
	getAuthorizationKeyword() {
		return `Basic ${btoa(`${accountSid}:${authToken}`)}`;
	},
};

export default TwAuthUtil;
