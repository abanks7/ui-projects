import React from 'react';
import { Container, Image, Grid, Header } from 'semantic-ui-react';

export default class MiddlePage extends React.Component {
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
            <Image size='medium' src='images/Bow_StringS.jpg' 
            className='dimmedimage' />
            <div className="text-block1">
              <span className="prodTitle">High Performance Bow Strings</span>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='overlaycont'>
            <Image size='medium' src='images/TshirtS.jpg' 
            className='dimmedimage'/>
            <div className="text-block2">
              <span className="prodTitle">Apparel</span>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='overlaycont'>
            <Image size='medium' src="images/JigsS.jpg" className='dimmedimage'/>
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