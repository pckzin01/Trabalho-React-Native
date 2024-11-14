import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    position: "absolute",
    width: "42%",
    height: 200,
    resizeMode: "contain",
    top: 55,
  },

  dados: {
    position: "absolute",
    top: 232,
    width: "90%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },

  continuar: {
    position: "absolute",
    top: 110,
    width: 320,
    height: 42,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  cont: {
    color: "rgba(0, 0, 0, 0.09)",
  },

  link: {
    top: 60,
    fontSize: 12,
    color: "rgba(0, 220, 255, 1)",
  },

  registro: {
    position: "absolute",
    bottom: 15,
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.4)",
    textAlign: "center",
  },

  cadastro: {
    color: "rgba(0, 220, 255, 1)",
  },
});
