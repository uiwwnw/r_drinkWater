import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Contents extends React.Component {
  render() {
    const p0 = '';
    const p1 = <Text>a</Text>;
    const p2 = <View>
      <Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text><Text>b</Text>
    </View>;
    const p3 = <Text>c</Text>;
    const p4 = <Text>d</Text>;
    const p5 = <Text>d</Text>;
    let page = eval('p'+this.props.commonState.pageNum);
    console.log('p'+this.props.commonState.pageNum);
    return (
      <ScrollView style={styles.container}>
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