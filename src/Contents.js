import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Contents extends React.Component {
  onMomentumScrollBegin(){
    this.props.commonFn({ 'scroll': true });
  }
  onMomentumScrollEnd(){
    this.props.commonFn({ 'scroll': false });
  }
  render() {
    const p0 = '';
    const p1 = <Text>a</Text>;
    const p2 = <View>
      <Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text>
      <Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text>
      <Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text>
      <Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text>
      <Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text>
      <Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text>
    </View>;
    const p3 = <Text>c</Text>;
    const p4 = <Text>d</Text>;
    const p5 = <Text>d</Text>;
    let page = eval('p' + this.props.commonState.pageNum);
    return (
      <ScrollView style={styles.container} onMomentumScrollBegin={this.onMomentumScrollBegin.bind(this)} onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}>
        {page}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40
  },
  text: {
    textAlign: 'center',
    fontSize: 30
  },
});