import React from 'react';
import { StyleSheet, Text, View, Button, AlertIOS } from 'react-native';

import { default as Room } from './Room';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: '',
      messages: [
        {
          text: 'test message',
          username: 'Nick'
        }
      ]
    }
  }

  handleJoinRoom = () => {
    console.log('JOINING ROOM', this.state.room)
    AlertIOS.prompt(
      'Enter Room Name',
      'Enter the name of the room you would like to join',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Join',
          onPress: (roomName) => {
            this.setState({ room: roomName });
          },
        },
      ]
    );
  } 

  handleNewMessage = ({ text, username }) => {
    console.log('SENDING NEW MESSAGE');
    const currentMessages = this.state.messages;
    currentMessages.push({ text, username });
    this.setState({ messages: currentMessages });
  } 

  render() {
    return (
      <View style={styles.container}>
      {this.state.room ? 
        <View>
          <Room {...this.state} handleNewMessage={this.handleNewMessage}/>
        </View> :
          <Button
            onPress={this.handleJoinRoom}
            title="Join Room"
            color="#164882"
            accessibilityLabel="Join Room"
          />
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
