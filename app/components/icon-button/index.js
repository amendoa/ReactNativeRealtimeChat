import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import {
	TouchableOpacity
} from 'react-native';
import * as mainConstants from '../../constants/main';
import * as styles from './style';

class IconButtonComponent extends Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.style.container}
				onPress={this.props.disabled ? () => {} : this.props.onPress}
			>

				<Icon
					name={this.props.name}
					size={this.props.size}
					color={this.props.disabled ? mainConstants.COLORS.TEXT_DISABLED : mainConstants.COLORS.TEXT_DARK}
				/>
			</TouchableOpacity>
		);
	}
}

export default IconButtonComponent;