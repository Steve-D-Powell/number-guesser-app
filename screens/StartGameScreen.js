import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from "../constants/Default-Styles";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const inputNumber = parseInt(enteredValue);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid!", "Has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    Keyboard.dismiss();

    setConfirmed(true);
    setSelectedNumber(inputNumber);
    setEnteredValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summary}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
          <Text style={{...styles.title, ...DefaultStyles.header}}>Select a Number</Text>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summary: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
