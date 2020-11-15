import closeIcon from './images/close-icon.svg';
import React, { Component } from 'react'

export default class PopUp extends Component {
	render() {
		return (
			<article className="pop-up">
				<button className="pop-up__close" onClick={this.props.onCloseClick}>
					<img src={closeIcon} className="pop-up__close-icn" alt="" />
				</button>
				<img src={this.props.imageSrc} className="pop-up__image" />
				<div className="pop-up__content">
					<h1 className="pop-up__title">{this.props.title}</h1>
					<div className="pop-up__text">{this.props.children}</div>
				</div>
			</article>
		);
	}
}
