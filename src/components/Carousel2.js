import React, { useState } from "react";
import "../sass/components/carousel.css";
import logo from "../images/fresk-logo.png";
import eu from "../images/eu.jpg";
import kurs from "../images/kurs.jpg";
import Carousel from "react-bootstrap/Carousel";
import useWindowSize from "./Utilities/useWindowsSize";
import slogo from '../images/fresk-logo-beznapi.png';

const Carousel2 = () => {

  // variables for window size change
  const [width, height] = useWindowSize()

  let picture = ''
  let id = ''
  if (width < '471') {
    picture = slogo
    id = 'logos'
  }
  else {
    picture = logo
    id = 'logo'
  }


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carosuel-item">
        <img id={id} className="d-block" src={picture} alt="First slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img id="kurs" className="d-block" src={kurs} alt="Second slide" />

        <Carousel.Caption className="c-caption">
          <div className="c-text">
            <h3>Kursy i Szkolenia</h3>
            <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="eu" className="d-block" src={eu} alt="Third slide" />

        <Carousel.Caption className="c-caption">
          <div className="c-text">
            <h3>Projekty</h3>
            <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel2;
