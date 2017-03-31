import React, { Component } from 'react';
import Section from '../../components/section';
import ChatMessage from '../../components/chat-message';

class ChatContainer extends Component {
	render () {
		const models = [
			{
				nickname: 'amendowins',
				message: 'en mi opinión, una cárcel en Estados Unidos es peor que la muerte.',
				color: 0
			},
			{
				nickname: 'amendowins',
				message: 'en mi opinión, una cárcel en Estados Unidos es peor que la muerte.',
				color: 1
			},
			{
				nickname: 'amendowins',
				message: 'en mi opinión, una cárcel en Estados Unidos es peor que la muerte.',
				color: 2
			},
			{
				nickname: 'amendowins',
				message: 'en mi opinión, una cárcel en Estados Unidos es peor que la muerte.',
				color: 3
			},
			{
				nickname: 'amendowins',
				message: 'en mi opinión, una cárcel en Estados Unidos es peor que la muerte.',
				color: 3
			},
			{
				nickname: 'amendowins',
				message: 'en mi opinión, una cárcel en Estados Unidos es peor que la muerte.',
				color: 3
			}
,
			{
				nickname: 'amendowins',
				message: 'en mi opinión, una cárcel en Estados Unidos es peor que la muerte.',
				color: 3
			}
		];
		return (
			<Section>
				{
					models.map((item, index) => {
						return (
							<ChatMessage
								model={item}
								key={index}
								left
							/>
						);
					})
				}
			</Section>
		);
	}
}

export default ChatContainer;