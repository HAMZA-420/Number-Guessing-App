import React, { useState ,useRef, useEffect} from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import NumberContainer from '../components/Number';
import Card from '../components/Card';
import DeafultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';


const generatRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generatRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};



const GameScreen = props => {
    const[currentGuess, setCurrentGuess] = useState(generatRandomBetween(1,100,props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setRounds] = useState(0);
    const {userChoice, onGameOver} = props;

    useEffect(() => {

        if(currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        }
    }, [currentGuess, props]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction == 'greater' && currentGuess>props.userChoice)) {
            Alert.alert("Don't lie!", "You Know that this is wrong...", [{text: 'sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current - currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generatRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1)
    };
    return (
        <View style={styles.screen}>
            <Text style={DeafultStyles.title}>Opponent's Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton  onPress={nextGuessHandler.bind(this, 'lower')} >
                    LOWER
                    </MainButton>
                <MainButton  onPress={nextGuessHandler.bind(this, 'greater')}>
                    GREATER
                    </MainButton>
            </Card>

        </View>
    )


};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    }
});

export default GameScreen;