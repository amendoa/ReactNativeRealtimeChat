import React, { Component } from 'react';
import { Text } from 'react-native';
import * as styles from './style';

class LabelComponent extends Component {
	render () {
		return (
			<Text style={styles.style.default}>
				{
					this.props.text
				}
			</Text>
		);
	}
}

export default LabelComponent;