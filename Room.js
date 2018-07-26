import React from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';

import { default as Message } from './Message';

export default Room = ({ room, messages, handleNewMessage }) => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>{room}</Text>
                { 
                    messages.map((msg, i) => {
                        return <Message {...msg} room={room} key={i}/>
                    })
                }
            </ScrollView>
            <Button
                onPress={() => {
                    handleNewMessage({ text: 'hardcoded', username: 'user' })
                }
                }
                title="New Message"
                color="#164882"
                accessibilityLabel="New Message"
            /> 
        </View>
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
