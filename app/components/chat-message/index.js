import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as styles from './style';
import * as utils from '../../utils';
import Order from '../../components/order';
import * as mainConstants from '../../constants/main';

class ChatMessageComponent extends Component {
	render () {
		const firstLetter = this.props.model.nickname.charAt(0).toUpperCase();

		const containerStyles = [
			styles.style.default
		];

		const messageContainerStyles = [
			styles.style.messageContainer
		];

		const tumbStyles = [
			styles.style.tumb
		];

		const tumbTextStyles = [
			styles.style.tumbText,
			{
				color: mainConstants.CHAT_NICK_COLORS[this.props.model.color]
			}
		];

		return (
			<Order style={containerStyles}>
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
						Fala mano opa suave lek opa la alalala ala la la

					</Text>
				</View>
			</Order>
		);
	}
}

export default ChatMessageComponent;