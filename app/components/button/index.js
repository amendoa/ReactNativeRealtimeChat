import React, { Component } from 'react';
import {
	TouchableHighlight,
	Text
} from 'react-native';
import * as styles from './style';

class ButtonComponent extends Component {
	render () {
		return (
			<TouchableHighlight
				style={styles.style.default}
				onPress={this.props.onPress}
				underlayColor={'#91e5bb'}
				activeOpacity={1}
			>
				<Text
					style={styles.style.text}
				>
					{
						this.props.text
					}
				</Text>
			</TouchableHighlight>
		);
	}
}

export default ButtonComponent;