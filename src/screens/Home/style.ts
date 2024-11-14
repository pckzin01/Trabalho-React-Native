import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  estiloTexto: {
    fontSize: 50,
  },

  header: {
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    top: 0,
    left: 10,
    right: 0,
    zIndex: 10,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 40,
  },

  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },

  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginTop: 90,
    backgroundColor: "#f6f6f6",
    borderRadius: 17,
    borderColor: "#f0f0f0",
  },

  descricao: {
    width: 50,
    fontSize: 11,
    textAlign: "center",
    marginLeft: 9,
    marginTop: 6,
  },

  novoContainer: {
    position: "absolute",
    top: 200,
    width: "90%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    backgroundColor: "#5bdbec",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },

  project: {
    fontSize: 18,
    fontWeight: "900",
  },

  project2: {
    fontSize: 18,
    fontWeight: "900",
    marginRight: 267,
    top: 22,
  },

  base: {
    bottom: 366,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    // borderColor: "#000",
    // borderWidth: 1,
    height: 50
  },

  edit: {
    width: 22,
    height: 22,
    top: -23,
    right: 16
  },

  add:{
    width: 22,
    height: 22,
  },

  espaco: {
    fontSize: 12,
    color: "rgba(0, 220, 255, 1)",
    fontWeight: "800",
    backgroundColor: "#fff",
    bottom: 15,
    right: 6
  },

  campoDown: {
    borderColor: "rgba(0, 220, 255, 1)",
    borderWidth: 2.4,
    borderRadius: 7,
    marginRight: 50,
    alignItems: "flex-end",
    width: 75,
    height: 23,
    right: 4
  },

  download: {
    width: 15,
    height: 15,
    marginRight: 60,
    top: 1,
    left: 12,
  },

  footer: {
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderBottomColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderTopColor: "#f0f0f0",
    borderWidth: 1,
  },

  icon2: {
    width: 30,
    height: 30,
  },

  iconContainer2: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 9,
    borderRadius: 17,
  },

  descricao2: {
    width: 50,
    fontSize: 10,
    textAlign: "center",
    position: "absolute",
    top: 50,
    left: 13,
  },
});
