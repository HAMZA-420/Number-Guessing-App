import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card:  {
        shadowColor: 'black',
        shadowOffset: {with: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8, //works only for turing on shadwo properties for android other they will workss for IOS
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
        }
});

export default Card;