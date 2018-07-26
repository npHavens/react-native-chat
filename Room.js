import React from 'react';
import { StyleSheet, ScrollView, Text, Button } from 'react-native';

import { default as Message } from './Message';

export default Room = ({ room, messages }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>{room}</Text>
            { 
                messages.map((msg, i) => {
                    return <Message {...msg} room={room} key={i}/>
                })
             }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
