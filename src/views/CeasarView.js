import React, { Component } from 'react';
import { alphabet } from '../utils/encoding-table';

export default class CeasarView extends Component {
	constructor(p) {
		super(p);
		this.state = {
			shift: 1,
		};
	}
	
	encode(message) {
		let encodedMessage = '';
		for (let i = 0; i < message.length; i++) {
			const char = message.charAt(i).toLowerCase();
			const charIndex = alphabet.indexOf(char);
			if (charIndex < 0) {
				encodedMessage += char;
				continue;
			}
			const encodedCharIndex = (charIndex + this.state.shift) % 26;
			encodedMessage += alphabet[encodedCharIndex];
		}
		return encodedMessage;
	}

	changeShift(newNumber) {
		const shift = Math.max(0, Math.min(25, newNumber));
		this.setState({ shift });
	}
	
	render() {
		const message = this.props.message;
		const encodedMessage = this.encode(message);
		return (
			<div>
				<p>{encodedMessage}</p>
				<div className="shift-ctrl">
				Shift by
				<input
					type="number"
					min="0"
					max="25"
					value={this.state.shift}
					onChange={e => this.changeShift(parseInt(e.target.value))}
					className="shift-ctrl__input"
				/>
				characters
				</div>
			</div>
		)
	}
}
