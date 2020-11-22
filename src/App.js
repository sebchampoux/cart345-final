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
            <div className="col-12 app__title-wrapper">
              <h1 class="app__title">Codes of the ages</h1>
              <h1 class="app__subtitle">Discover some of the world's most famous codes - and try them yourself!</h1>
            </div>
            <div className="col-12">
              <textarea
                className="input-area"
                placeholder="Tell me the bottom of your mind..."
                onChange={e => this.setState({ currentText: e.target.value })}
              >{this.state.currentText}</textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12 advice">
              <img src={infoCircle} alt="" className="advice__icon" />
              For more info on each code/cypher, click on the boxes!
            </div>
            <div className="col-6">
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
            <div className="col-6">
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
            <div className="col-6">
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
            <div className="col-6">
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
