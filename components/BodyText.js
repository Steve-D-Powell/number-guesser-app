import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => <Text style={styles.body}>{props.children}</Text>;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
  },
});

export default BodyText;
