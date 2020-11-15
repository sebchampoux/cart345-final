import React, { Component } from 'react'
import { encodingTable } from '../utils/encoding-table';

export default class AsciiView extends Component {
	encode(message) {
		let encodedMessage = '';
		for(let i = 0; i < message.length; i++) {
			const char = message.charAt(i).toLowerCase();
			if (char == ' ') {
				encodedMessage += '  ';
				continue;
			}
			if (!encodingTable[char]) {
				encodedMessage += char;
				continue;
			}
			const encodedChar = encodingTable[char].ascii;
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
				<i className="typebox__info">Spaces were added between characters for readability.  A real ASCII string would be represented as a continuous string of bits.</i>
			</div>
		);
	}
}
