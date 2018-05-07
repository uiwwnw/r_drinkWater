import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Footer extends React.Component {
  tab(e) {
    console.log(e);
    this.props.commonFn({ 'tab': e });
  }
  render() {
    return (
      <View style={this.props.commonState.visiableFooter ? styles.containerVisiable : styles.container}>
        <View style={styles.wrap}><Button key='1' style={styles.text} title="a" onPress={this.tab.bind(this,1)}></Button></View>
        <View style={styles.wrap}><Button key='1' style={styles.text} title="a" onPress={this.tab.bind(this,2)}></Button></View>
        <View style={styles.wrap}><Button key='2' style={styles.text} title="a" onPress={this.tab.bind(this,3)}></Button></View>
        <View style={styles.wrap}><Button key='3' style={styles.text} title="a" onPress={this.tab.bind(this,4)}></Button></View>
        <View style={styles.wrap}><Button key='4' style={styles.text} title="a" onPress={this.tab.bind(this,5)}></Button></View>
      </View>
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
    fontSize: 12,
    textAlign: 'center'
  }
});