import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const goalInput = props => {
  const [goal, setGoal] = useState("");

  const inputGoalHandler = enteredGoal => {
    setGoal(enteredGoal);
  };

  const goalAddedHandler = () => {
    props.goalAdded(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Course Goal"
          style={styles.input}
          onChangeText={inputGoalHandler}
          value={goal}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={goalAddedHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    width: "40%"
  }
});

export default goalInput;
