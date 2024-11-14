import React from "react";
import {
  Image,
  Linking,
  Text,
  TextInput,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import SetaEsq from "../../Mock/images/setaEsq.png";
import HeaderLogin from "../../components/HeaderLogin";
import Logo from "../../Mock/images/CapCut-Logo.jpg";
import { TextInputField } from "../../components/TextInputField";

export const LoginInput = () => {
  return (
    <View style={styles.container}>
      <HeaderLogin leftIcon={SetaEsq} helpText="Ajuda" entrar="Entrar" />

      <Image style={styles.logo} source={Logo} />

      <View style={styles.dados}>
        <TextInputField placeHolder="Insira o endereço de e-mail" />
        <TextInputField placeHolder="Inserir senha" />
        <TouchableOpacity style={styles.continuar}>
          <Text style={styles.cont}>Continuar</Text>
        </TouchableOpacity>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://example.com/senha")}
        >
          Esqueceu a senha?
        </Text>
      </View>

      <Text style={styles.registro}>
        Não tem uma conta? {" "}
        <Text
          style={styles.cadastro}
          onPress={() => Linking.openURL("https://example.com/cadastro")}
        >Registra-se</Text>
      </Text>
    </View>
  );
};
