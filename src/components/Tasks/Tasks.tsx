import { Pressable, Text } from "react-native";

import Checkbox from "expo-checkbox";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
  isCompleted: boolean;
  onToggleCompleted: () => void;
};

export function Tasks({
  title,
  isCompleted,
  onRemove,
  onToggleCompleted,
}: Props) {
  return (
    <Pressable style={styles.container} onPress={onToggleCompleted}>
      <Checkbox
        style={styles.checkbox}
        value={isCompleted}
        onValueChange={onToggleCompleted}
        color={isCompleted ? "#5E60CE" : "#4EA8DE"}
      />

      <Text
        style={[
          styles.tasks,
          isCompleted && {
            textDecorationLine: "line-through",
            color: "#808080",
          },
        ]}
      >
        {title}
      </Text>

      <Pressable
        style={{
          padding: 8,
        }}
        onPress={onRemove}
      >
        <AntDesign name="delete" size={22} color="#808080" />
      </Pressable>
    </Pressable>
  );
}
