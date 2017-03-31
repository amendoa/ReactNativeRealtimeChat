import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as styles from './style';
import Order from '../../components/order';
import * as mainConstants from '../../constants/main';
import * as utils from '../../utils/';

class ChatMessageComponent extends Component {

	renderTumb = () => {
		const tumbStyles = [
			styles.style.tumb
		];

		const tumbTextStyles = [
			styles.style.tumbText,
			{
				color: mainConstants.CHAT_NICK_COLORS[this.props.model.color]
			}
		];
		const firstLetter = this.props.model.nickname.charAt(0).toUpperCase();
		return (
			<View
				order={this.props.left ? 0 : 1}
				style={tumbStyles}
			>
				<Text style={tumbTextStyles} >
					{
						firstLetter
					}
				</Text>
			</View>
		);
	}

	renderMessageContent = () => {
		const messageContainerStyles = [
			styles.style.messageContainer,
			utils.className(styles.style.messageContainerBackgroundReverse, this.props.left),
			utils.className(styles.style.messageContainerBackground, !this.props.left)
		];

		return (
			<View
				order={this.props.left ? 1 : 0}
				style={messageContainerStyles}
			>
				<Text style={styles.style.title}>
					{
						this.props.model.nickname
					}
				</Text>
				<Text style={styles.style.message} >
					{
						this.props.model.message
					}
				</Text>
			</View>
		);
	}

	render () {
		const containerStyles = [
			styles.style.default
		];

		return (
			<Order style={containerStyles}>
				{
					this.renderTumb()
				}
				{
					this.renderMessageContent()
				}
			</Order>
		);
	}
}

export default ChatMessageComponent;