import  React from 'react';
import { StyleSheet, View, Text, TabBarIOS, Modal, Button } from 'react-native';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'welcome'
        }
    }

    render () {
        return (
            <View style={styles.container}>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
