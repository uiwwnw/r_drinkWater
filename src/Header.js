import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    let tit;
    switch (this.props.commonState.pageNum){
      case 1:
        tit = '메인';
        break;
      case 2:
        tit = '메인2';
        break;
      case 3:
        tit = '메인3';
        break;
      case 4:
        tit = '메인4';
        break;
      case 5:
        tit = '설정';
        break;
    }
    return (
      <View style={!this.props.commonState.scroll?styles.container:styles.containerHidden}>
        <Text style={!this.props.commonState.scroll?styles.text:styles.textHidden}>{tit}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40
  },
  containerHidden: {
    height: 10
  },
  textHidden: {
    fontSize: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
});