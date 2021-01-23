import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameOverScreen = props => {

    return(
        <View style={styles.screen}>
            <Text>Game is Over</Text>
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