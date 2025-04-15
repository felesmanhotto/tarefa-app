import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Task } from "./types"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const STORAGE_KEY = '@tasks';

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
        console.error("Erro ao carregar tarefas: ", error);
    }
  };
  
    loadTasks();
  }, []);
  
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Erro ao salvar tarefas: ", error);
    }
  };
  
    saveTasks();
  }, [tasks]);

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
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "lightblue",
  },
});
