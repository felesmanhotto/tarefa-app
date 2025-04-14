import { View, Text, FlatList, StyleSheet } from "react-native";

export default function TaskList({ tasks }: { tasks: string[] }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item}</Text>
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
  },
});
