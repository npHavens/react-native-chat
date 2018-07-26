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

  handleNewMessage = () => {
    console.log('SENDING NEW MESSAGE');
  } 

  render() {
    return (
      <View style={styles.container}>
      {this.state.room ? 
        <View>
          <Room {...this.state} />
          <Button
            onPress={this.handleNewMessage}
            title="New Message"
            color="#164882"
            accessibilityLabel="New Message"
          /> 
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
