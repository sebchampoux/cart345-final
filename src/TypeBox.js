import React, { Component } from 'react'

export default class TypeBox extends Component {
	render() {
		return (
			<article className="typebox" onClick={this.props.onClick}>
				<h1 className="typebox__encoding-name">{this.props.title}</h1>
				<div>
					{this.props.children}
				</div>
			</article>
		)
	}
}
