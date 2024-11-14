import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    
    width: "100%",
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 15,
    paddingStart: 20,
    paddingRight: 20
  },

  caixa: {
    width: 320,
    height: 42,
    marginBottom: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },

  focusedContainer: {
    borderColor: "rgba(0, 220, 255, 0.5)",
    borderWidth: 2,
  },
});
