import React, { Component } from 'react';
import jssha1 from 'js-sha1';

export default class Sha1View extends Component {
	render() {
		const message = this.props.message;
		const encodedMessage = jssha1(message);
		return (
			<div>
				<p>{encodedMessage}</p>
			</div>
		)
	}
}
