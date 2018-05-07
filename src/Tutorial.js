import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Turorial extends React.Component {
    close(e) {
        this.props.commonFn({ 'tab': 1 });
    }
    render() {
        return (
            <View style={styles.turorial}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make dddwill automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Button onPress={this.close.bind(this)} title="닫기">닫기</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    turorial: {
        zIndex: 10000,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});