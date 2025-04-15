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
          <Text style={[styles.taskText,
            item.completed && styles.completedTaskText,
          ]
          }>{item.text}
          </Text>

          <View style={styles.buttonGroup}>
            {!item.completed && <Pressable
              style={[styles.button, styles.completeButton]}
              onPress={()=>onComplete(item.id)}>

              <Text style={styles.buttonText}>Concluir</Text>
            </Pressable>}

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
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8, 
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  completeButton: {
    backgroundColor: "#4caf50", // verde
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: "#f44336", // vermelho
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
