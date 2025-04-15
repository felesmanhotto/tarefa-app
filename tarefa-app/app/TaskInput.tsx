import { useState } from "react";
import { View, TextInput, Pressable , StyleSheet, Text } from "react-native";

export default function TaskInput({ onAddTask }: { onAddTask: (task: string) => void }) {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.trim()) {
      onAddTask(text);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={text}
        onChangeText={setText}
      />
      <Pressable style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#0D00FF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

