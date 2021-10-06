import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/Colors";

const GameOverScreen = ({ guessRounds, userNumber, newGameHandler }) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over...</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.resultText}>
        Your phone needed <Text style={styles.highlight}>{guessRounds}</Text>{" "}
        guesses to find the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
