import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

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
      <Button title="Adicionar" onPress={handleAddTask} />
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
});
