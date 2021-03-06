import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class viewdonation extends React.Component {
  static navigationOptions = {
    title: 'All donate',
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
                <Text>Donation ID: 1</Text>
                <Text note numberOfLines={1}>Donation type:</Text>
                <Text note numberOfLines={2}>Quentity:</Text>
                <Text note numberOfLines={3}>Date:</Text>
              </Body>
              <Right>
                <Button transparent >
                  <Text>REQUEST</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}