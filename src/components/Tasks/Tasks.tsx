import { useState } from "react";
import { Pressable, Text } from "react-native";

import Checkbox from "expo-checkbox";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./styles";

type Props = {
  tasks: string;
  onRemove: () => void;
};

export function Tasks({ tasks, onRemove }: Props) {
  const [isChecked, setChecked] = useState(false);

  function handleToggleCheckbox() {
    setChecked((prevState) => !prevState);
  }

  return (
    <Pressable style={styles.container} onPress={handleToggleCheckbox}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
      />

      <Text
        style={[
          styles.tasks,
          isChecked && {
            textDecorationLine: "line-through",
            color: "#808080",
          },
        ]}
      >
        {tasks}
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
