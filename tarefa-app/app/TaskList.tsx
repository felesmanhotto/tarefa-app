import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { Task } from "./types";

export default function TaskList({ 
  tasks, 
  onComplete,
  onDelete,
 }: { 
  tasks: Task[];
  onComplete: (task:string) => void;
  onDelete: (task:string) => void ;
}) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item.text}</Text>

          <View>
            <Pressable
              style={[styles.button, styles.completeButton]}
              onPress={()=>onComplete(item.id)}>

              <Text style={styles.buttonText}>Concluir</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.deleteButton]}
              onPress={()=>onDelete(item.id)}>

              <Text style={styles.buttonText}>Excluir</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 8,
  },
  completeButton: {
    backgroundColor: "#4CAF50",
  },
  deleteButton: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
