import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(16), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(g => g.id !== goalId);
    });
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        goalAdded={goalHandler}
        onCancel={cancelAddGoalHandler}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            deleted={deleteGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
