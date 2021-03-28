import React, { Component } from 'react';
import { BackButton, NativeRouter, Route } from 'react-router-native'
import Detail from './src/pages/detail';
import Home from './src/pages/home';
import { Text, View } from 'react-native'
import HeaderComp from './src/components/header'
import HomePage from './src/pages/homeHooks';
import AsyncStorage from '@react-native-community/async-storage';
import LoginPage from './src/pages/loginForm';
import Profile from './src/pages/profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    }
    AsyncStorage.getItem('username', (error, result) => {
      if (!Boolean(result)) {
        this.setState({ hidden: true })
      } else {
        this.setState({ hidden: false })
      }
    })
  }

  render() {
    return (
      // NativeRouter : untuk mengakomodir routing dari react-router
      <NativeRouter>
        <HeaderComp />
        {/* BackButton : digunakan untuk mengembalikan dari page yg terbuka ke page sebelumnya */}
        <BackButton>
          <Route exact path='/' component={LoginPage} />
          <Route path='/home' component={Home} />
          <Route path='/detail' component={Detail} />
          <Route path='/profile' component={Profile} />
        </BackButton>
      </NativeRouter>
    );
  }
}

export default App;