import React from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

export default class Footer extends React.Component {
  tab(e) {
    this.props.commonFn({ 'tab': e });
  }
  render() {
    return (
      <Animated.View style={!this.props.commonState.scroll ? styles.containerVisiable : styles.container}>
        <View style={styles.wrap}><Button color="#000" title="홈" onPress={this.tab.bind(this,1)}></Button></View>
        <View style={styles.wrap}><Button color="#000" title="a" onPress={this.tab.bind(this,2)}></Button></View>
        <View style={styles.wrap}><Button color="#000" title="a" onPress={this.tab.bind(this,3)}></Button></View>
        <View style={styles.wrap}><Button color="#000" title="a" onPress={this.tab.bind(this,4)}></Button></View>
        <View style={styles.wrap}><Button color="#000" title="설정" onPress={this.tab.bind(this,5)}></Button></View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 0
  },
  containerVisiable: {
    flexDirection: 'row',
    height: 40
  },
  wrap: {
    alignSelf: 'center',
    flex: 1
  },
  text: {
    fontSize: 35,
    textAlign: 'center'
  }
});