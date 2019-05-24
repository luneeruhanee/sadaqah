import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class viewrequest extends React.Component {
  static navigationOptions = {
    title: 'All request',
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51KEqIsBa4L._SX370_BO1,204,203,200_.jpg' }} />
              </Left>
              <Body>
                <Text>Request ID: 1</Text>
                <Text note numberOfLines={1}>Request type:</Text>
                <Text note numberOfLines={2}>Quentity:</Text>
                <Text note numberOfLines={3}>Date:</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>VIEW</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}