import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>alalal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40
  },
  text: {
    textAlign: 'center',
    fontSize: 30
  },
});