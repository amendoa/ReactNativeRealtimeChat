import React, { Component } from 'react';
import { View } from 'react-native';
import * as styles from './style';

class SectionComponent extends Component {
	render () {
		const sectionStyles = [
			styles.style.default,
			{
				justifyContent: this.props.justify,
				padding: this.props.padding
			}
		];
		return (
			<View style={sectionStyles}>
				{
					this.props.children
				}
			</View>
		);
	}
}
export default SectionComponent;