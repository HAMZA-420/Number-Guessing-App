import React, { useState ,useRef, useEffect} from 'react';
import { Button, StyleSheet, Text, View, Alert,ScrollView,FlatList } from 'react-native';
import NumberContainer from '../components/Number';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
import {Ionicons} from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};




const GameScreen = props => {
    const initialGuess = generateRandomBetween(1,100,props.userChoice);
    const[currentGuess, setCurrentGuess] = useState(initialGuess);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const {userChoice, onGameOver} = props;

    useEffect(() => {

        if(currentGuess === userChoice) {
            onGameOver(pastGuesses);
        }
    }, [currentGuess, props, onGameOver]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction == 'greater' && currentGuess>props.userChoice)) {
            Alert.alert("Don't lie!", "You Know that this is wrong...", [{text: 'sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current - currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(PastGuesses=>[nextNumber, ...PastGuesses]);
    };
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Opponent's Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton  onPress={nextGuessHandler.bind(this, 'lower')} >
                    <Ionicons name="md-remove" size={24} color="white"/>
                    </MainButton>
                <MainButton  onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="md-add" size={24} color="white"/>

                    </MainButton>
            </Card>
            <View style={styles.listContainer}>
            <ScrollView contentContainerStyle={styles.list}>
                {pastGuesses.map((guess, index) => 
                <View key={index} style={styles.listItem}>
                <Text style={DefaultStyles.bodyText}>#{pastGuesses.length-index}</Text>
                <Text style={DefaultStyles.bodyText}>{guess}</Text>
                </View> )}
            </ScrollView>
            </View>
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
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listContainer: {
        flex: 1,
        width: '80%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});

export default GameScreen;