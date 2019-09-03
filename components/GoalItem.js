import React from "react";

import { View, Text, StyleSheet } from "react-native";

const goalItem = props => (
  <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black"
  }
});

export default goalItem;
