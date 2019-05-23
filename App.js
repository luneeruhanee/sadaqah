import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
//import signup from "./screens/signup";
import login from "./screens/login";
import donationform from "./screens/donationform";
import homepage from "./screens/homepage";
import requestform from "./screens/requestform";
import viewdonation from "./screens/viewdonation";
import viewrequest from "./screens/viewrequest";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    //signup: signup,
    login: login,
    donationform: donationform,
    homepage: homepage,
    requestform: requestform,
    viewdonation: viewdonation,
    viewrequest: viewrequest
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}