import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'
import firebase from 'firebase';

export default class homepage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  logout = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigator.immediatelyResetStack([Router.getRoute('goodbye')], 0);
    }).catch(function(error) {
      // An error happened.
    });
  }
  render() {
    return (
       <Container style={styles.container}>
       <Form>
       <Text style={{alignItems: 'center'}}>Welcome to E-sadaqah</Text>
        
        
     <Button style={{marginTop:10}}
     full
     rounded
     success
     onPress={() => this.props.navigation.navigate('donationform')}>
     <Text style={{color:'#fff'}}>Donate here</Text>
     </Button>

     <Button style={{marginTop:10}} 
     full
     rounded
     success
      onPress={() => this.props.navigation.navigate('requestform')}>
      <Text style={{color:'#fff'}}>Request here</Text>
      </Button>

     <Button style={{marginTop:10}}
     full
     rounded
     success onPress={() => this.props.navigation.navigate('viewdonation')}>
     <Text style={{color:'#fff'}}>View donation</Text>
     </Button>

     <Button style={{marginTop:10}}
     full
     rounded
     success
    onPress={() => this.props.navigation.navigate('viewrequest')}>
    <Text style={{color:'#fff'}}>View request</Text>
    </Button>
    <Button style={{marginTop:10}}
    full
    rounded
    success
        // onPress={() => this.props.navigation.navigate('viewrequest')} title="View request here" 
        onPress={()=>this.logout(this.props.navigation.navigate("HomeScreen"))}
        >
    <Text style={{color:'#fff'}}>Sign out</Text>
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
});