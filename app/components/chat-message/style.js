import { StyleSheet } from 'react-native';
import * as mainConstants from '../../constants/main';

export const style = StyleSheet.create({
	default: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10
	},
	messageContainer: {
		backgroundColor: '#e7f2e9',
		borderRadius: 20,
		width: 250,
		margin: 10,
		padding: 15
	},
	messageContainerBackgroundReverse: {
		backgroundColor: '#e7f2e9'
	},
	messageContainerBackground: {
		backgroundColor: '#ececec'
	},
	message: {
		fontSize: 15,
		color: mainConstants.COLORS.TEXT
	},
	title: {
		fontSize: 17,
		color: mainConstants.COLORS.TEXT_DARK
	},
	tumb: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		width: 55,
		height: 55,
		borderRadius: 55 / 2,
		//backgroundColor: 'red'
	},
	tumbText: {
		textAlign: 'center',
		fontSize: 30
	}
});