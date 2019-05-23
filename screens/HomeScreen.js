import React, { Component } from "react";
import {StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'
export default class HomeScreen extends React.Component {
  render() {
    return (      

      <Container style={styles.container}>
       <Form>
       <Text style={{alignItems:'center'}}>E-sadaqah</Text>

     <Button style={{marginTop:10}}
     full
     rounded
     success
     onPress={() => this.props.navigation.navigate('login')}>
     <Text style={{color:'#fff'}}>Login</Text>
     </Button>

     
       </Form>
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  
  },
  Text:{
 alignItems: 'center',
paddingTop:5,    
  },
});