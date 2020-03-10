import React from 'react';
import { Container, Image } from 'semantic-ui-react';


export default class MainContent extends React.Component {
  render() {
    return (
      <div>
      <Container className="textCont">
      <p>The arc of an arrow is captivating, it flies straight and true with little sound at a rapid rate of speed. Although awe inspiring, the flight of a perfectly shot arrow by a skilled archer is deadly. There is a distinct resemblance between an arrow flying through the air towards its intended target and a Great Horned Owl soaring through the sky towards its prey. The Owl and the arrow take flight with almost no sound, both striking with immense power and precision. Just as the Owl has SILENT FLIGHT, so too does my arrow.</p>
  
      <p>Silent Flight Archery, based in Arizona, designs and manufactures all products in the USA. We take pride in making quality products that our customers enjoy. Our high quality archery products for sale like the Silencer Fork, bring new innovation to the sport of archery. You can customize and create your own bow string silencers in a matter of seconds. The unique miniature band system allows the bow string silencer to be easily and securely applied to the bow string, ensuring no more tying.Buy premium quality archery supplies, including cordovan tabs, arrow wraps and more,online at our exclusive archery equipment store, Silent Flight Archery, and take your archery skills soaring to new heights today!</p>
  
      <p>Silent Flight’s inherent love of archery along with our promise to customers to stand behind every product makes us unique. We love hearing from you! Send us an email with any question or inquiries and we’ll get back to you ASAP.</p>
      
      <strong>CHECK OUT OUR HOW TO VIDEO!</strong>
      </Container>
      <br/><br/>
      <Container className="videoPlaceholder">
        <Image src="images/video.jpg"/>
      </Container>
      </div>
    )
  }
}