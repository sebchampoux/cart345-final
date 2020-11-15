import React, { Component } from 'react'

export default class Ceasar extends Component {
	render() {
		return (
			<div>
				<p>Cesar's shift is one of the oldest known cyphers.  A cypher is a secret code that replaces every letter for another, rendering a message unreadable to anyone not aware of the code.  Ceasar used a simple shift to send coded messages to his generals: they would agree on a number, and then every letter would be shifted by N (ex. if the shift was 4, A = D, B = E, etc.)</p>
				<p>Although brilliant in its simplicity, this cypher is very simple due to the limited number of possible combinations and relative decrypting ease.  Over history, many more cypher techniques would be invented to safely transmit secret communications, one of the most elaborated being the infamous <i>Enigma</i> by the Germans during WWII.</p>
			</div>
		)
	}
}
