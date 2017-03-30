import React, { Component } from 'react';
import {
	TextInput
} from 'react-native';
import * as styles from './style';

class InputText extends Component {
	render () {
		return (
			<TextInput
				style={styles.style.default}
				underlineColorAndroid="transparent"
				autoCorrect={this.props.autoCorrect}
				placeholder={this.props.placeholder}
				onChangeText={this.props.onChangeText}
				value={this.props.value}
				secureTextEntry={this.props.secureTextEntry}
			/>
		);
	}
}

export default InputText;