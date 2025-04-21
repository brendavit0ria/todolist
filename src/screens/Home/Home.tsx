import { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

import { styles } from "./styles";

import { Tasks } from "../../components/Tasks/Tasks";

export function Home() {
  const [tasks, setTasks] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taskInfoContainer}>
          <View style={styles.infoGroup}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.counter}>0</Text>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.counter}>9</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Tasks key={item} tasks={item} />}
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
