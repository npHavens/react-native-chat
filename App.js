import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
    this.setState({ room: 'test room' })
  } 

  handleNewMessage = () => {
    console.log('SENDING NEW MESSAGE')
    
  } 

  render() {
    return (
      <View style={styles.container}>
      {this.state.room ? 
        <View>
          <Button
            onPress={this.handleNewMessage}
            title="New Message"
            color="#164882"
            accessibilityLabel="New Message"
          /> 
          <Room {...this.state}/>
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
