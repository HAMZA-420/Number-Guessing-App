import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const generatRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generatRandomBetween(min, max, exclude);
    }
    else {
        return rndNumb;
    }
}

const GameScreen = props => {
    const[currentGuess, setCurretnGuess] = useState(generatRandomBetween(1,100,props.userChoice));
};

const styles = StyleSheet.create({});

export default GameScreen;