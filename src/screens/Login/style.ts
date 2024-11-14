import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    left: 10,
    right: 0,
    zIndex: 10,
  },

  img: {
    top: 20,
    width: 18,
    height: 18,
    right: 158,
  },

  ajuda: {
    left: 137,
    color: "rgba(0, 0, 0,0.4)",
  },

  logo: {
    width: 130,
    height: 75,
    position: "absolute",
    top: 180
  },

  login: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 175  },

  tiktok:{
    backgroundColor: "#000",
    width: "77%",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  tt: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
  },

  social: {
    backgroundColor: "#fff",
    width: "77%",
    height: 40,
    borderRadius: 50,
    borderColor: "#f0f0f0",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  textSocial: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.8)",
    fontWeight: "600",
  },

  texto: {
    width: "68%",
    justifyContent: "center",
    alignItems: "center",
},

  termos: {
    fontSize: 12,
    textAlign: "center",
  },

  termo: {
    color: "rgba(0, 220, 255, 1)"
  },

  imgSocial: {
    width: 27,
    height: 27,
    marginHorizontal: 5,
    marginBottom: 3,
    position: "absolute",
    left:2,
  },

  imgG: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
    marginBottom: 3,
    position: "absolute",
    left:4,
  },

  imgE: {
    width: 22,
    height: 22,
    marginHorizontal: 5,
    marginBottom: 3,
    position: "absolute",
    left:4,
  },

  imgTt:{
    width: 24,
    height: 24,
    marginHorizontal: 5,
    marginBottom: 3,
    position: "absolute",
    left:4,
  }
});
