import React from 'react';
import { Container, Icon, Input, Grid, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
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