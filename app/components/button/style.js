import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	default: {
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		margin: 4,
		backgroundColor: '#65e3a3'
	},
	disabled: {
		backgroundColor: '#dedede'
	},
	text: {
		color: '#FFFFFF',
		fontSize: 16
	},
	textDisabled: {
		color: '#a0a0a0',
		fontSize: 16
	}
});