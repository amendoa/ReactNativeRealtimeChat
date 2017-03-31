import React, { Component } from 'react';
import {
	ScrollView,
	View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SocketIOClient from 'socket.io-client';
import Section from '../../components/section';
import ChatMessage from '../../components/chat-message';
import InputTextComponent from '../../components/input-text';
import IconButton from '../../components/icon-button';
import * as styles from './style';
import * as mainConstants from '../../constants/main';
import * as chatActions from '../../actions/chat';
import * as utils from '../../utils';

class ChatContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {

		};
		this.socket = SocketIOClient(mainConstants.API.ROOT, {
			jsonp: false,
			transports: ['websocket']
		});

		this.socket.on('server-message', this.onServerMessage);
	}

	componentWillMount () {
		if (this.refs.scrollView) {
			this.refs.scrollView.scrollToEnd();
		}
	}

	onServerMessage = (message) => {
		const {
			actions
		} = this.props;

		actions.addMessage(message);
	}

	sendServerMessage = () => {
		const {
			data
		} = this.props;

		if (data.currentUser) {
			const message = {
				nickname: data.currentUser.nickname,
				message: this.state.message,
				color: data.currentUser.color
			};
			this.socket.send(message);
		}
	}

	render () {
		const {
			data
		} = this.props;


		return (
			<Section>
				<ScrollView
					ref={(ref) => { this.scrollView = ref; }}
					onContentSizeChange={(contentWidth, contentHeight) => { this.scrollView.scrollTo({ y: contentHeight, animated: true }); }}
				>
					{
						data.messages.map((item, index) => {
							return (
								<ChatMessage
									model={item}
									key={index}
									left={index % 2 === 0}
								/>
							);
						})
					}
				</ScrollView>
				<View style={styles.style.actionsContainer} >
					<InputTextComponent
						autoCorrect={false}
						onChangeText={(message) => this.setState({ message })}
						secureTextEntry={false}
						placeholder={'Your message'}
						expand
						multiline
					/>
					<IconButton
						name="md-send"
						size={30}
						onPress={this.sendServerMessage}
						disabled={utils.isEmptyOrSpaces(this.state.message)}

					/>
				</View>
			</Section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.chat,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(chatActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);