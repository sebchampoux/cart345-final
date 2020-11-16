import React, { Component } from 'react';
import { encodingTable } from '../utils/encoding-table';

export default class MorseView extends Component {
	encode(message) {
		let encodedMessage = '';
		for(let i = 0; i < message.length; i++) {
			const char = message.charAt(i).toLowerCase();
			if (char === ' ') {
				encodedMessage += '   ';
				continue;
			}
			if (!encodingTable[char]){
				encodedMessage += char;
				continue;
			}
			const encodedChar = encodingTable[char].morse;
			encodedMessage += encodedChar + ' ';
		}
		return encodedMessage;
	}
	
	render() {
		const message = this.props.message;
		const encodedMessage = this.encode(message);

		return (
			<div>
				<p>{encodedMessage}</p>
				<i className="typebox__info">0s represent short signals, 1s represent long signals.  Spaces were added between characters for readability.  In a real Morse code message, a space would be represented by a brief signal interruption.</i>
			</div>
		);
	}
}
