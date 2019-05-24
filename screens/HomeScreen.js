import React, { Component } from "react";
import {StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'
export default class HomeScreen extends React.Component {
  render() {
    return (      

      <Container style={styles.container}>
<Image source={{uri:'https://static1.squarespace.com/static/5a84a563f43b55bce820fa10/t/5bede7d66d2a73b7d6f218e0/1555671200061/?format=1500w'}}
      style={styles.welcomeImage}/>
       <Text style={styles.getStartedText}>Welcome to E-Sadaqah!</Text>
       <Form>
         

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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  Text:{
 alignItems: 'center',
paddingTop:5,    
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },

});