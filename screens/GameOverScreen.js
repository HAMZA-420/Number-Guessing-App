import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {

    return(
        <View style={styles.screen}>
         <View style={DefaultStyles.bodyText}><Text>Game is Over</Text></View>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;