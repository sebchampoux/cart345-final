import closeIcon from './images/close-icon.svg';
import React, { Component } from 'react';
import { gsap } from 'gsap';

export default class PopUp extends Component {
	constructor(p) {
		super(p);
		this.popUp = React.createRef();
		this.popUpCloseBtn = React.createRef();
		this.img = React.createRef();
		this.title = React.createRef();
		this.text = React.createRef();
	}

	componentDidMount() {
		const tl = gsap.timeline();
		tl.set([
			this.popUp.current,
			this.img.current,
		], {
			transformOrigin: '0 0',
		});
		tl.from(this.popUp.current, {
			duration: 0.4,
			scaleX: 0,
		});
		tl.from(this.img.current, {
			duration: 0.4,
			scaleY: 0,
		}, '-=0.2');
		tl.from([
			this.title.current,
			this.text.current,
		], {
			opacity: 0,
			x: -100,
			duration: 0.3,
			stagger: 0.1,
		});
	}

	closePopUp() {
		const tl = gsap.timeline({
			onComplete: this.props.onCloseClick,
		});
		tl.to([
			this.text.current,
			this.title.current,
			this.popUpCloseBtn.current,
			this.img.current,
		], {
			opacity: 0,
			duration: 0.3,
			stagger: 0.15,
		});
		tl.set(this.popUp.current, {
			transformOrigin: '100% 0',
		});
		tl.to(this.popUp.current, {
			duration: 0.5,
			scaleX: 0,
		});
	}

	render() {
		return (
			<article className="pop-up" ref={this.popUp}>
				<button className="pop-up__close" onClick={this.closePopUp.bind(this)} ref={this.popUpCloseBtn}>
					<img src={closeIcon} className="pop-up__close-icn" alt="" />
				</button>
				<img src={this.props.imageSrc} className="pop-up__image" ref={this.img} />
				<div className="pop-up__content">
					<h1 className="pop-up__title" ref={this.title}>{this.props.title}</h1>
					<div className="pop-up__text" ref={this.text}>{this.props.children}</div>
				</div>
			</article>
		);
	}
}
