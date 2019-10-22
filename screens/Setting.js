import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Setting </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Setting;
