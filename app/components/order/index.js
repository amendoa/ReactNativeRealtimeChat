import React, { Component } from 'react';
import { View } from 'react-native';

class OrderComponent extends Component {
	render () {
		const childrens = React.Children.toArray(this.props.children);
		const newChildrens = [];

		childrens.forEach((item) => {
			newChildrens[item.props.order] = item;
		});

		return (
			<View style={this.props.style} >
				{
					newChildrens.map((item) => {
						return item;
					})
				}
			</View>
		);
	}
}

export default OrderComponent;
