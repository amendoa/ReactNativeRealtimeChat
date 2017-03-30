import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import {
	configureStore
} from '../../store';
import LoginContainer from '../login';
import ChatContainer from '../chat';

class AppContainer extends Component {
	render () {
		const store = configureStore();
		return (
			<Provider store={store}>
				<Router>
					<Scene key="root" >
						<Scene
							key="ChatScene"
							hideNavBar
							component={ChatContainer}
							duration={250}
							animation='fade'
						/>

						<Scene
							key="LoginScene"
							hideNavBar
							component={LoginContainer}
							duration={250}
							animation='fade'
						/>
					</Scene>
				</Router>
			</Provider>
		);
	}
}

export default AppContainer;