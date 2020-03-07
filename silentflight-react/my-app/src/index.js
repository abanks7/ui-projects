import React from 'react';
import ReactDOM from 'react-dom';
import Fade from './Fade.js';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { 
  Container, Menu, Icon, Modal,
  Dropdown, Image, Segment, Sidebar, 
  Input, Grid, List, Header
} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
    <Menu borderless className="topmenu">
      <Container>
        <Menu.Item>
          <Image src="/img/Silent_Logo_300x.png" className="logo"/>
        </Menu.Item>
        <Menu.Item className="topmenuitem" as='a' position="right"
        onClick={this.props.handler}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Modal basic dimmer='inverted' centered={false} trigger={
          <Menu.Item className="topmenuitem" as='a'>
          <Icon name="search" />
          </Menu.Item>
          } closeIcon>
          <Modal.Content>
            <Modal.Description>
            <Container id="searchModalPop">
              <Container id="searchForm">
              <Input transparent fluid action={{ icon: 'search' }} placeholder='Search our store'/>
              </Container>
            </Container>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Dropdown item icon="cart" className="r-cart">
          <Dropdown.Menu>
            <Dropdown.Item>Your cart is currently empty.</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
    )
  }
}

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  handler() {
    this.setState({
      visible: true
    })
  }

  state = { visible: false }

  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          direction='left'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
        >
          <Menu.Item as='a' onClick={this.handleSidebarHide}>
            <Icon name='close'/>
          </Menu.Item>
          <Menu.Item as='a' id='menuItem'>Home</Menu.Item>
          <Menu.Item as='a' id='menuItem'>Products</Menu.Item>
          <Menu.Item as='a' id='menuItem'>Blog</Menu.Item>
          <Menu.Item as='a' id='menuItem'>Videos</Menu.Item>
          <Menu.Item as='a' id='menuItem'>About</Menu.Item>
          <Menu.Item as='a' id='menuItem'>Contact</Menu.Item>
          <Menu.Item as='a' id='menuItemS'>Log In</Menu.Item>
          <Menu.Item as='a' id='menuItemS'>Create Account</Menu.Item>
          <Menu.Item as='a' id='menuItemS'>Search</Menu.Item>
          <Menu.Item as='a' id='menuItemS'>About us</Menu.Item>
          <Menu.Item as='a' id='menuItemS'>Products</Menu.Item>
          <Menu.Item as='a' id='menuItemS'>Contact</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <TopMenu handler = {this.handler}/>
            <Fade/>
            <div>
            <MainContent/>
            <MiddlePage/>
            <FooterMenu/>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    )
  }
}

class MainContent extends React.Component {
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
        <Image src="img/video.jpg"/>
      </Container>
      </div>
    )
  }
}

class MiddlePage extends React.Component {
  render() {
    return (
      <Container className='products'>
        <Header as='h1'>High Performance Archery Products</Header>
        <hr/>
        <br/>
        <br/>
      <Grid columns={3}>
        <Grid.Column>
          <div className='overlaycont'>
            <Image size='medium' src='img/Bow_StringS.jpg' 
            className='dimmedimage' />
            <div className="text-block1">
              <span className="prodTitle">High Performance Bow Strings</span>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='overlaycont'>
            <Image size='medium' src='img/TshirtS.jpg' 
            className='dimmedimage'/>
            <div className="text-block2">
              <span className="prodTitle">Apparel</span>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='overlaycont'>
            <Image size='medium' src="img/JigsS.jpg" className='dimmedimage'/>
            <div className="text-block2">
              <span className="prodTitle">Silencer Forks</span>
            </div>
          </div>
        </Grid.Column>
      </Grid>
      </Container>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
      <div>
        <div className='footer'>
          <Container className='mailinglist'>
            <Container className='mailinglistform'>
              <Input transparent fluid action='SUBSCRIBE' placeholder='Sign up to our mailing list'/>
            </Container>
          </Container>
        </div>
        <hr id="bigGap"/>
        <div>
          <Container className='footer2'>
            <Grid columns={2}>
              <Grid.Column>
                <Container>
                <List>
                  <List.Item>Search</List.Item>
                  <List.Item>About Us</List.Item>
                  <List.Item>Products</List.Item>
                  <List.Item>Contact</List.Item>
                </List>
                </Container>
              </Grid.Column>
              <Grid.Column textAlign='right'>
                <Container>
                  <List>
                    <List.Item>© 2020, Silent Flight Archery</List.Item>
                    <List.Item>Powered by frustration and coffee</List.Item>
                    <List.Item>
                      <div className='rightCol'>
                        <Icon size='big' name='cc amex' />
                        <Icon size='big' name='cc apple pay' />
                        <Icon size='big' name='cc diners club' />
                        <Icon size='big' name='cc discover' />
                        <Icon size='big' name='cc jcb' />
                        <Icon size='big' name='cc mastercard' />
                        <Icon size='big' name='cc paypal' />
                        <Icon size='big' name='cc visa' />
                      </div>
                    </List.Item>
                  </List>
                </Container>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<SidebarMenu/>, document.getElementById('root'));
