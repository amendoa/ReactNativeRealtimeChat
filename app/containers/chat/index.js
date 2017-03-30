import React, { Component } from 'react';
import Section from '../../components/section';
import ChatMessage from '../../components/chat-message';

class ChatContainer extends Component {
	render() {
		return (
			<Section>
				<ChatMessage />
			</Section>
		);
	}
}

export default ChatContainer;