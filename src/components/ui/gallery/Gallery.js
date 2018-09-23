import React, { Component } from 'react';

import Pic1 from '../../../assets/images/action-adventure-climbing.jpg';
import Pic2 from '../../../assets/images/Adult-arms-in-air-ocean-backgrouond.jpg';
import Pic3 from '../../../assets/images/Square-red-face-unhappy.jpg';
import Pic4 from '../../../assets/images/adventure-asphalt-california.jpg';
import Pic5 from '../../../assets/images/agenda-calendar-checklist.jpg';
import Pic6 from '../../../assets/images/ancient-art-buddha.jpg';
import Pic7 from '../../../assets/images/animal-animal-photography-blurred-background.jpg';
import Pic8 from '../../../assets/images/architecture-beautiful-church.jpg';
import Pic9 from '../../../assets/images/birds-clouds-colorful.jpg';
import Pic10 from '../../../assets/images/black-and-white-black-and-white-handwriting.jpg';
import Pic11 from '../../../assets/images/book-book-bindings-close-up.jpg';
import Pic12 from '../../../assets/images/circle-clean-clear.jpg';

class Gallery extends Component {
  componentDidMount = () => {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = window.M.Materialbox.init(elems);
    return instances;
  };

  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="thg-red">Photo</span>
            <span className="thg-thin-font">Gallery</span>
          </h4>
          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic2}
                alt="fish"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic11}
                alt="car"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic3}
                alt="house"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic5}
                alt="dog"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic7}
                alt="pet"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic6}
                alt="cat"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic7}
                alt="run"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic8}
                alt="fun"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic9}
                alt="stapler"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic10}
                alt="paper clip"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic11}
                alt="lit"
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src={Pic12}
                alt="printer"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
