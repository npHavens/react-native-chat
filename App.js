import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { default as NavBar } from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: ''
    }
  }

  handleJoinRoom = () => {
    console.log('JOINING ROOM', this.state.room)
    this.setState({ room: 'testRoom' })
  } 

  handleNewMessage = () => {
    console.log('SENDING NEW MESSAGE')
    
  } 

  render() {
    return (
      <View style={styles.container}>
      {this.state.room ? 
          <Button
            onPress={this.handleNewMessage}
            title="New Message"
            color="#164882"
            accessibilityLabel="New Message"
          /> :

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
