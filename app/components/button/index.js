import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text
} from 'react-native';
import * as styles from './style';
import * as utils from '../../utils';

class ButtonComponent extends Component {
	render () {
		const classNames = [
			utils.className(styles.style.default, true),
			utils.className(styles.style.disabled, this.props.disabled)
		];

		const textStyles = [
			utils.className(styles.style.text, !this.props.disabled),
			utils.className(styles.style.textDisabled, this.props.disabled)
		];

		return (
			<TouchableOpacity
				style={classNames}
				onPress={this.props.disabled ? () => {} : this.props.onPress}
				activeOpacity={this.props.disabled ? 1 : 0.7}

			>
				<Text
					style={textStyles}
				>
					{
						this.props.text
					}
				</Text>
			</TouchableOpacity>
		);
	}
}

export default ButtonComponent;