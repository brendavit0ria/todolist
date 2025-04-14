import { View, Image } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.content}></View>
    </View>
  );
}
