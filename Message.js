import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default Message = (props) => {
    return (
        <View style={styles.container}> 
            <Text>{props.text}</Text>
            <Text>{props.username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c0d2e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
