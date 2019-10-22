import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Go To Details Screen" onPress={() => this.props.navigation.navigate('Detail')} />
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

export default Feed;
