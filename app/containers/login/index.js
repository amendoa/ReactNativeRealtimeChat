import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import SectionComponent from '../../components/section';
import InputTextComponent from '../../components/input-text';
import ButtonComponent from '../../components/button';
import * as utils from '../../utils';
import * as mainConstants from '../../constants/main';
import * as chatActions from '../../actions/chat';

class LoginContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {

		};
	}

	handlerSubmitClick = () => {
		const {
			actions
		} = this.props;

		const user = {
			nickname: this.state.nickname,
			color: mainConstants.CHAT_NICK_COLORS[utils.getRandomArbitrary(0, mainConstants.CHAT_NICK_COLORS.length)]
		};

		actions.signinUser(user);

		Actions.ChatScene();
	}

	render () {
		return (
			<SectionComponent
				justify="center"
				padding={15}
			>
				<InputTextComponent
					autoCorrect={false}
					onChangeText={(nickname) => this.setState({ nickname })}
					secureTextEntry={false}
					placeholder={'Type your nickname'}
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

const mapStateToProps = (state) => {
	return {
		chat: state.chat,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(chatActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);