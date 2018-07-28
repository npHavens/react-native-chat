import React from 'react';
import io from 'socket.io-client';
import { StyleSheet, Text, View, Button, AlertIOS } from 'react-native';

import { default as Room } from './Room';

const socket = io('https://simple-socket-server.herokuapp.com/');
//const socket = io('https://socket-server.apps.us2.bosch-iot-cloud.com');


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

  componentWillMount() {
    socket.on('log', (data) => {
      console.log(data.msg)
    });

    socket.on('serverMsg', (data) => {
      this.handleServerMessage(data.msg)
    })
  }


  handleJoinRoom = () => {
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
            socket.emit('joinRoom', { room: this.state.room })
            console.log('JOINING ROOM', this.state.room)
          },
        },
      ]
    );
  } 

  handleNewMessage = ({ text, username, room }) => {
    socket.emit('newMsg', { msg: { text, username}, room });
    console.log('SENDING NEW MESSAGE TO:', room); 
  }
  
  handleServerMessage = ({ text, username, room }) => {
    const currentMessages = this.state.messages;
    currentMessages.push({ text, username, room });
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
            style={styles.button}
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
  button: {
    fontSize: 36
  },
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
