import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text } from 'react-native-elements';

class WelcomeScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text h3>React Native Starter</Text>
            <View style={styles.startBtn}>
              <Button title="Start here" color='red' onPress={() => this.props.navigation.navigate('Dashboard')} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startBtn: {
      width: 100,
      padding: 2,
      marginTop: 10
    }
});

export default WelcomeScreen;