import React from 'react';
import TopMenu from '../components/TopMenu';
import Fade from '../components/Fade';
import MainContent from "../components/MainContent";
import MiddlePage from "../components/MiddlePage";
import FooterMenu from '../components/FooterMenu';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Menu, Icon, Segment, Sidebar } from 'semantic-ui-react';

export default class SilentFlight extends React.Component {
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