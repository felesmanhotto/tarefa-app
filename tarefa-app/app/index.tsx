import { useState } from "react";
import { View, StyleSheet } from "react-native";
import AddTask from "./TaskInput";
import TaskList from "./TaskList";

export default function HomeScreen() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    if (task.trim().length > 0) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <View style={styles.container}>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "lightblue",
  },
});
