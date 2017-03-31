import * as chatConstants from '../../constants/chat';

export function addMessage (message) {
	return {
		type: chatConstants.ADD_MESSAGE,
		message
	};
}

export function signinUser (user) {
	return {
		type: chatConstants.SIGNIN_USER,
		user
	};
}