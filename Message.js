import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default Message = ({ text, username }) => {
    return (
        <View style={styles.container}> 
            <Text>{text}</Text>
            <Text>Username: {username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: '#c0d2e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
