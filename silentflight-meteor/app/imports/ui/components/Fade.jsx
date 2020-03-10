import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container, Button, Icon } from 'semantic-ui-react';

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 10000,
      draggable: false,
      swipe: false,
      arrows: false,
    };
    return (
      <Slider {...settings}>
        <div id="imgone">
          <Container textAlign='center' id="mainwords">
          <div className="topwords">
            <p><span>WELCOME TO</span></p>
          </div>
          <div className="mainwords">
            <p><span>Silent Flight Archery</span></p>
          </div>
          <br/>
          <div>
            <Button color='black' id="shopbutton">
            SHOP NOW <Icon fitted size='small' name='long arrow alternate right'/>
            </Button>
          </div>
          </Container>
        </div>
        <div id="imgtwo">
        </div>
        <div id="imgthr">
        </div>
      </Slider>
    );
  }
}