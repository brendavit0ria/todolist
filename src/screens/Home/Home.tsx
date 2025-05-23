import { useState } from "react";
import uuid from "react-native-uuid";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
  Keyboard,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Tasks } from "../../components/Tasks/Tasks";

import { styles } from "./styles";

type Task = {
  id: string;
  title: string;
};

export function Home() {
  const [addTasks, setAddTasks] = useState("");
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleTasksAdd() {
    if (addTasks.trim().length === 0) {
      return Alert.alert("Campo Vazio", "Por favor, adicione uma tarefa.");
    }

    const newTask = {
      id: uuid.v4(),
      title: addTasks,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setAddTasks("");

    Keyboard.dismiss();
  }

  function handleTasksRemove(taskToRemove: string) {
    Alert.alert("Remover", "Você realmente deseja remover esta tarefa?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((task) => task.id !== taskToRemove)
          );

          setCompletedTasks((prevState) =>
            prevState.filter((id) => id !== taskToRemove)
          );
        },
      },
    ]);
  }

  function handleToggleCompleted(taskToToggle: string) {
    if (completedTasks.includes(taskToToggle)) {
      setCompletedTasks((prevState) =>
        prevState.filter((task) => task !== taskToToggle)
      );
    } else {
      setCompletedTasks((prevState) => [...prevState, taskToToggle]);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setAddTasks}
            value={addTasks}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity style={styles.button} onPress={handleTasksAdd}>
            <Ionicons name="add-circle-outline" size={22} color="#F2F2F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.taskInfoContainer}>
          <View style={styles.infoGroup}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.counter}>{tasks.length}</Text>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.counter}>{completedTasks.length}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Tasks
              title={item.title}
              onRemove={() => handleTasksRemove(item.id)}
              isCompleted={completedTasks.includes(item.id)}
              onToggleCompleted={() => handleToggleCompleted(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image
                style={{ marginTop: 50, marginBottom: 20 }}
                source={require("../../assets/clipboard.png")}
              />
              <Text style={[styles.listEmptyText, { fontWeight: "bold" }]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
