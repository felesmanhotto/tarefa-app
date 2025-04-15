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
      completed: false
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  };

  const handleCompleteTask = (taskId: string) => {
    setTasks((prev)=>
      prev.map((task) =>
        task.id === taskId ? {...task, completed: true} : task
      )
    )
    console.log("Tarefas atualizadas:", tasks);
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} 
      onComplete={handleCompleteTask}
      onDelete={handleDeleteTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "lightblue",
  },
});
