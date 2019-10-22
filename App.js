import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import AppContainer from './Navigation';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
      );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});