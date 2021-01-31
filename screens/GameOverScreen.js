import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {

    return(
        <ScrollView>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7/2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;