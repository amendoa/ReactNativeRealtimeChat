import React, { Component } from 'react';
import SectionComponent from '../../components/section';
import InputTextComponent from '../../components/input-text';
import ButtonComponent from '../../components/button';
import * as utils from '../../utils';
import * as mainConstants from '../../constants/main';

class LoginContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {

		};
	}

	handlerSubmitClick = () => {
		console.log(this.state.nickname);
		console.log(mainConstants.CHAT_NICK_COLORS[utils.getRandomArbitrary(0, mainConstants.CHAT_NICK_COLORS.length)]);
	}

	render () {
		return (
			<SectionComponent
				justify="center"
			>
				<InputTextComponent
					autoCorrect={false}
					onChangeText={(nickname) => this.setState({ nickname })}
					secureTextEntry={false}
					placeholder={'nickname'}
				/>

				<ButtonComponent
					text={'Sign in'}
					onPress={this.handlerSubmitClick}
					disabled={utils.isEmptyOrSpaces(this.state.nickname)}
				>

				</ButtonComponent>
			</SectionComponent>
		);
	}
}

export default LoginContainer;