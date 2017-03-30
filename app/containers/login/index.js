import React, { Component } from 'react';
import {
	Button
} from 'react-native';
import Section from '../../components/section';
import InputText from '../../components/input-text/';

class LoginContainer extends Component {
	render () {
		return (
			<Section>
				<InputText
					autoCorrect={false}
					onChangeText={(username) => this.setState({ username })}
					secureTextEntry={false}
					placeholder={'teste'}
				/>

				<Button
					title="Entrar"
					color="#ff0084"
					onPress={() => {}}
					width="200"
					height="200"
				>

				</Button>
			</Section>
		);
	}
}

export default LoginContainer;