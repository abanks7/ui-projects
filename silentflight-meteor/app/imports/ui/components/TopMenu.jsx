import React from 'react';
import { Container, Menu, Icon, Modal, Dropdown, Image, Input} from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
    <Menu borderless className="topmenu">
      <Container>
        <Menu.Item>
          <Image src="/images/Silent_Logo_300x.png" className="logo"/>
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
