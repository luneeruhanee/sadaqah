import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
//import { createStackNavigator, createAppContainer , Navigation,Navigate} from "react-navigation";
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAugFohAR9ngFyWFFy_irVILjlk6AETLcE",
  authDomain: "e-sodaqah.firebaseapp.com",
  databaseURL: "https://e-sodaqah.firebaseio.com",
  projectId: "e-sodaqah",
  storageBucket: "e-sodaqah.appspot.com",
  messagingSenderId: "67842083140",
  appId: "1:67842083140:web:35778280652f1f9a"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'

export default class login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
    constructor(props){
        super(props)
        
        this.state=({
            email:'',
            password:''
        })
    }
signUpUser=(email, password)=> {
try{

  if(this.state.password.length<6){
    alert("please enter the email and password for sign up")
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email,password)

}
catch(error){
  console.log(error.toString())
}
}


loginUser=(email, password)=>{
  try{
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
      console.log(user)
    })
    }
  
  catch(error){
    console.log(error.toString())
  
  }
}
/*logout = () => {
  firebase.auth().signOut().then(() => {
    this.props.navigator.immediatelyResetStack([Router.getRoute('goodbye')], 0);
  }).catch(function(error) {
    // An error happened.
  });
}*/
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email)=> this.setState({email})}
           />
          </Item>
            <Item floatingLabel>
            <Label>password</Label>
            <Input
            secureTextEntry={true}
            autoCorrect={false}         
            autocapitalize="none" 
           onChangeText={(password)=> this.setState({password})}
/>
    </Item>

    <Button style={{marginTop:10}}
    full
    rounded
    success
    onPress={()=>this.loginUser(this.state.email,this.state.password,this.props.navigation.navigate('homepage'))}
    //onPress={() => this.props.navigation.navigate('homepage')}
    > 
    <Text style={{color:'#fff'}}>Login</Text>
    </Button>

    <Button style={{marginTop:10}}
    full
    rounded
    primary
    onPress={()=>this.signUpUser(this.state.email,this.state.password)}
    > 
    <Text style={{color:'#fff'}}>signup</Text>
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
    padding:10
  },
});