import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: "100%",
    backgroundColor: "#1A1A1A",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 18,
    marginRight: 12,
  },
  form: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: -30,
    marginBottom: 42,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
});
