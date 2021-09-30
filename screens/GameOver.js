import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ guessRounds, userNumber, newGameHandler }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over...</Text>
      <Text>Number of Rounds: {guessRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="New Game" onPress={newGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
