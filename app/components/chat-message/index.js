import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as styles from './style';
import * as utils from '../../utils';

class ChatMessageComponent extends Component {
	render () {
		const containerStyles = [
			styles.style.default
		];

		const tumbStyles = [
			styles.style.tumb
		];

		return (
			<View>
				<View style={tumbStyles} >

				</View>
				<View style={containerStyles}>
					<Text style={styles.style.text} >
						chat messagte

					</Text>
				</View>
			</View>
		);
	}
}

export default ChatMessageComponent;