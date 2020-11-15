import React, { Component } from 'react';
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
  }

  openPopUp(contentName) {
    const popup = {
      ...this.popupContents[contentName],
    };
    this.setState({ popup });
  } 

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <textarea
                className="input-area"
                placeholder="Enter some text here..."
                onChange={e => this.setState({ currentText: e.target.value })}
              >{this.state.currentText}</textarea>
              <p>Here's how this message would be represented in the following codes or cyphers.  Click on a box to learn more!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <TypeBox
                title="Ceasar's shift cypher"
                onClick={() => this.openPopUp('ceasar')}
              >
                <CeasarView
                  message={this.state.currentText}
                />
              </TypeBox>
            </div>
            <div className="col-6">
              <TypeBox
                title="Morse Code encoding"
                onClick={() => this.openPopUp('morse')}
              >
                <MorseView
                  message={this.state.currentText}
                />
              </TypeBox>
            </div>
            <div className="col-6">
              <TypeBox
                title="ASCII encoding"
                onClick={() => this.openPopUp('ascii')}
              >
                <AsciiView
                  message={this.state.currentText}
                />
              </TypeBox>
            </div>
            <div className="col-6">
              <TypeBox
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
