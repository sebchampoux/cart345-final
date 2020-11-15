import React, { Component } from 'react';
import './App.css';
import PopUp from './PopUp';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <textarea
                className="input-area"
                placeholder="Enter some text here..."
              >
              </textarea>
            </div>
          </div>
        </div>
        <PopUp
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Behemoth_roller_coaster_near_bend.jpg/512px-Behemoth_roller_coaster_near_bend.jpg"
          title="ASCII Encoding"
        >
          <p>Tumblr brunch leggings knausgaard celiac, la croix vaporware kombucha single-origin coffee. Viral chia butcher echo park pork belly, shaman dreamcatcher kale chips chillwave. Kombucha locavore waistcoat, try-hard edison bulb banh mi hoodie kitsch fanny pack plaid kogi. Kinfolk pok pok la croix roof party, gastropub air plant bitters everyday carry fanny pack portland. Authentic four dollar toast single-origin coffee kogi austin polaroid seitan, pitchfork lo-fi.</p>
          <p>Af flannel wayfarers, williamsburg neutra prism hexagon offal subway tile banjo letterpress. Blog gentrify migas glossier authentic. XOXO chartreuse iPhone, glossier copper mug palo santo tousled. Letterpress heirloom adaptogen banjo mustache normcore. Disrupt subway tile asymmetrical offal whatever meh. Aesthetic tofu distillery 3 wolf moon la croix single-origin coffee flexitarian pork belly thundercats.</p>
        </PopUp>
      </div>
    );
  }
}
