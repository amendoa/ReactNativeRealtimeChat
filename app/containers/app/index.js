import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import {
	configureStore
} from '../../store';
import LoginContainer from '../login';

class AppContainer extends Component {
	render () {
		const store = configureStore();
		return (
			<Provider store={store}>
				<Router>
					<Scene key="root" >
						<Scene
							key="IndexScene"
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