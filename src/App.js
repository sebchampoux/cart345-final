import React, { Component } from 'react';
import { gsap } from 'gsap';
import './App.css';
import PopUp from './PopUp';
import TypeBox from './TypeBox';
import AsciiView from './views/AsciiView';
import CeasarView from './views/CeasarView';
import MorseView from './views/MorseView';
import Sha1View from './views/Sha1View';
import Ceasar from './details/Ceasar';
import Morse from './details/Morse';
import Ascii from './details/ASCII';
import SHA1Hashing from './details/SHA1Hashing';
import asciiImg from './images/ascii.png';
import ceasarImg from './images/ceasar.jpg';
import morseImg from './images/morse.png';
import sha1Img from './images/sha1.png';
import infoCircle from './images/info-circle-solid.svg';

export default class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      currentText: '',
      popup: null,
    };
    this.popupContents = {
      ceasar: {
        title: 'Ceasar\'s Shift Cypher',
        content: <Ceasar />,
        image: ceasarImg,
      },
      morse: {
        title: 'Morse Encoding',
        content: <Morse />,
        image: morseImg,
      },
      ascii: {
        title: 'ASCII Encoding',
        content: <Ascii />,
        image: asciiImg,
      },
      sha1: {
        title: 'SHA1 Hashing',
        content: <SHA1Hashing />,
        image: sha1Img,
      },
    };
    const title = 'Codes of the Ages';
    this.titleChars = [];
    for (let i = 0; i < title.length; i++) {
      this.titleChars.push(title.charAt(i));
    }
    this.titleCharsRef = [];
    this.subtitle = React.createRef();
    this.textarea = React.createRef();
    this.infoBox = React.createRef();
    this.typeBoxesElems = [];
  }

  openPopUp(contentName) {
    const popup = {
      ...this.popupContents[contentName],
    };
    this.setState({ popup });
  }

  componentDidMount() {
    // Opening animation
    const tl = gsap.timeline();
    tl.set(this.textarea.current, {
      transformOrigin: '0 0',
    });
    tl.from(this.titleCharsRef, {
      duration: 0.7,
      opacity: 0,
      stagger: 0.05,
    });
    tl.from(this.subtitle.current, {
      duration: 0.3,
      opacity: 0,
      y: -30,
    }, '-=0.15');
    tl.from(this.textarea.current, {
      duration: 0.4,
      scaleY: 0,
    }, '-=0.2');
    tl.from(this.infoBox.current, {
      duration: 0.5,
      opacity: 0,
    }, '-=0.1');
    tl.from(this.typeBoxesElems, {
      duration: 0.3,
      x: -100,
      opacity: 0,
      stagger: 0.1,
    }, '-=0.2');
  }

  storeRefToTypeBox(r) {
    this.typeBoxesElems.push(r);
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-12 app__title-wrapper">
              <h1 className="app__title">{
                this.titleChars.map((c, i) => <span key={i} ref={cs => this.titleCharsRef.push(cs)}>{c}</span>)
              }</h1>
              <h2 ref={this.subtitle} class="app__subtitle">Discover some of the world's most famous codes - and try them yourself!</h2>
            </div>
            <div className="col-12">
              <textarea
                className="input-area"
                placeholder="Tell me the bottom of your mind..."
                onChange={e => this.setState({ currentText: e.target.value })}
                value={this.state.currentText}
                ref={this.textarea}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12 advice" ref={this.infoBox}>
              <img src={infoCircle} alt="" className="advice__icon" />
              For more info on each code/cypher, click on the boxes!
            </div>
            <div
              className="col-6"
              ref={this.storeRefToTypeBox.bind(this)}>
              <TypeBox
                className="typebox--ceasar"
                title="Ceasar's shift cypher"
                onClick={() => this.openPopUp('ceasar')}
              >
                <CeasarView
                  message={this.state.currentText}
                />
              </TypeBox>
            </div>
            <div
              className="col-6"
              ref={this.storeRefToTypeBox.bind(this)}>
              <TypeBox
                className="typebox--morse"
                title="Morse Code encoding"
                onClick={() => this.openPopUp('morse')}
              >
                <MorseView
                  message={this.state.currentText}
                />
              </TypeBox>
            </div>
            <div
              className="col-6"
              ref={this.storeRefToTypeBox.bind(this)}>
              <TypeBox
                className="typebox--terminal"
                title="ASCII encoding"
                onClick={() => this.openPopUp('ascii')}
              >
                <AsciiView
                  message={this.state.currentText}
                />
              </TypeBox>
            </div>
            <div
              className="col-6"
              ref={this.storeRefToTypeBox.bind(this)}>
              <TypeBox
                className="typebox--terminal"
                title="SHA1 hashing"
                onClick={() => this.openPopUp('sha1')}
              >
                <Sha1View
                  message={this.state.currentText}
                />
              </TypeBox>
            </div>
          </div>
        </div>
        {this.state.popup &&
          <PopUp
            imageSrc={this.state.popup.image}
            title={this.state.popup.title}
            onCloseClick={e => this.setState({ popup: null })}
          >
            {this.state.popup.content}
          </PopUp>
        }
      </div>
    );
  }
}
