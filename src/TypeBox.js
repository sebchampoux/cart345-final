import React, { Component } from 'react'

export default class TypeBox extends Component {
	render() {
		return (
			<article className={'typebox ' + this.props.className} onClick={this.props.onClick}>
				<h1 className="typebox__encoding-name">{this.props.title}</h1>
				<div className="typebox__text">
					{this.props.children}
				</div>
			</article>
		)
	}
}
