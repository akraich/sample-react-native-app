import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const goalItem = props => (
  <TouchableOpacity onPress={props.deleted.bind(this, props.id)}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
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
