import React, { Component } from 'react'

export default class ASCII extends Component {
	render() {
		return (
			<div>
				<p>ASCII, shorthand for American Standard Code For Information Interchange, is a one of many character encodings used by computers.  Each characters is represented in binary (0s and 1s), as one byte (8 bits, although only the seven rightmost bits are used).</p>
				<p>The ASCII encoding contains 128 characters, lower and uppercase english letters, 0 to 9, several punctuation characters and other misceallenous symbols.</p>
				<p>ASCII is rarely used today due to its limited character set.  More popular encodings include UTF-8, which contains 65 065 characters: all ASCII symbols plus tons of characters from dozens of languages.</p>
			</div>
		)
	}
}
