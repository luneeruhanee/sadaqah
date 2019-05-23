import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class login extends Component {
  static navigationOptions = {
    title: 'Sign up',
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Full name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Matric number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
              </Item>
              <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button rounded onPress={() => this.props.navigation.navigate('login')}>
            <Text>Sign up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}