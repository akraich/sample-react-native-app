import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet } from "react-native";

const goalInput = props => {
  const [goal, setGoal] = useState("");

  const inputGoalHandler = enteredGoal => {
    setGoal(enteredGoal);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add Course Goal"
        style={styles.input}
        onChangeText={inputGoalHandler}
        value={goal}
      ></TextInput>
      <Button title="ADD" onPress={props.goalAdded.bind(this, goal)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});

export default goalInput;
