import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  textContainer: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});

export default Loading;
