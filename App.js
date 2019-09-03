import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const goalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(16), value: goalTitle }
    ]);
  };

  const deleteGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(g => g.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput goalAdded={goalHandler} />
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
