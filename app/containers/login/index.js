import React, { Component } from 'react';
import SectionComponent from '../../components/section';
import InputTextComponent from '../../components/input-text';
import ButtonComponent from '../../components/button';

class LoginContainer extends Component {
	render () {
		return (
			<SectionComponent
				justify="center"
			>
				<InputTextComponent
					autoCorrect={false}
					onChangeText={(username) => this.setState({ username })}
					secureTextEntry={false}
					placeholder={'nickname'}
				/>

				<ButtonComponent
					text={'Sign in'}
					onPress={() => {}}
				>

				</ButtonComponent>
			</SectionComponent>
		);
	}
}

export default LoginContainer;