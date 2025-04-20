import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

import { Tasks } from "../../components/Tasks/Tasks";

export function Home() {
  return (
    <View>
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

        <Tasks tasks="Integer urna interdum massa libero auctor neque turpis turpis semper." />
        <Tasks tasks="Integer urna interdum massa libero auctor neque turpis turpis semper." />
        <Tasks tasks="Integer urna interdum massa libero auctor neque turpis turpis semper." />
      </View>
    </View>
  );
}
