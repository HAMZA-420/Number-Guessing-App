import React from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {

    return(
        <View style={styles.screen}>
        <Text style= {DefaultStyles.title}>Game is Over</Text>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>

        </View>
            <Text style= {DefaultStyles.bodyText}>Number of rounds: {props.roundsNumber}</Text>
            <Text style= {DefaultStyles.bodyText}>Number was: {props.userNumber}</Text>
            <MainButton onPress={props.onRestart}>
                NEW GAME
                </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;