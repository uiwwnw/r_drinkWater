import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tutorial from './src/Tutorial.js';
import Header from './src/Header.js';
import Contents from './src/Contents.js';
import Footer from './src/Footer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      visiableFooter: true
    };
  }
  fn(e) {
    const _this = this;
    const tab = function(i) {
      _this.setState({
        pageNum: i
      })
    }

    switch(Object.keys(e)[0]) {
      case 'tab':
        tab(e[Object.keys(e)[0]])
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.pageNum === 0?<Tutorial commonFn={this.fn.bind(this)}/>:''}
        <Header commonState={this.state} commonFn={this.fn.bind(this)}/>
        <Contents commonState={this.state} commonFn={this.fn.bind(this)}/>
        <Footer commonState={this.state} commonFn={this.fn.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  }
});