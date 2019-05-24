import React, { Component } from 'react';
import {Alert, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Picker, Icon, Label, Input, Button } from 'native-base';
export default class donationform extends React.Component {
  static navigationOptions = {
    title: 'Donation form',
  };
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
        
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="select donation types"
                placeholderStyle={{ color: "#020202" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Select donation type" value="key0" />
                <Picker.Item label="clothes" value="key1" />
                <Picker.Item label="Money" value="key2" />
                <Picker.Item label="Book" value="key3" />
              </Picker>
            </Item>
            <Item floatingLabel>
              <Label>Quantity</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Donor name</Label>
              <Input />
            </Item>
            <Button style={{marginTop:10}}
              full
              rounded
              success
              onPress={() => Alert.alert('You have successfully donate')}>
              <Text style={{color:'#fff'}}>Donate</Text>
             </Button>
          </Form>

        </Content>
      </Container>
    );
  }
}
