import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

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
      </View>
    </View>
  );
}
