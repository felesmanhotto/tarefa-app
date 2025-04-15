import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Task } from "./types"

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (text:string) => {
    if (text.trim() === "") return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
    };

    setTasks((prev) => [...prev, newTask]);
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} 
      onComplete={(task)=>{console.log("concluida: ", task)}}
      onDelete={(task)=>{console.log("excluída: ", task)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 100,
    backgroundColor: "lightblue",
  },
});
