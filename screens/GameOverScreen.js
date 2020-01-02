import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.summaryContainer}>
        <Text>The Game is Over!</Text>
        <Text>Number Of Rounds: {props.roundNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <View style={styles.button}>
          <Button
            title='NEW GAME'
            onPress={props.onRestart}
            color={Colors.accent}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  summaryContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginVertical: 10
  }
});

export default GameOverScreen;
