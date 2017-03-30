import React, { Component } from 'react';
import { View } from 'react-native';
import * as styles from './style';

class SectionComponent extends Component {
	render () {
		return (
			<View style={styles.style.default}>
				{
					this.props.children
				}
			</View>
		);
	}
}
export default SectionComponent;