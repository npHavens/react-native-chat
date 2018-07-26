import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { default as Message } from './Message';

export default Room = ({ room, messages }) => {
    console.log(room, messages)
    return (
        <View>
            <Text>{room}</Text>
            { 
                messages.map((msg) => {
                    return <Message {...msg} room={room}/>
                })
             }
        </View>
    );
}