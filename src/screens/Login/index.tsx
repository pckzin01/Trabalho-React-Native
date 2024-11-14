import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { styles } from "../Login/style";
import SetaEsq from "../../Mock/images/setaEsq.png";
import Logo from "../../Mock/images/Logo.jpg";
import Tiktok from "../../Mock/images/Tiktok.png"
import Gmail from "../../Mock/images/Gmail.png"
import Facebook from "../../Mock/images/Facebook.png"
import Email from "../../Mock/images/Email.png"
import HeaderLogin from "../../components/HeaderLogin";

export const Login = () => {
  return (
    <View style={styles.container}>
      <HeaderLogin
        leftIcon={SetaEsq}
        helpText="Ajuda"
      />

      <Image style={styles.logo} source={Logo} />

      <View style={styles.login}>
        <TouchableOpacity style={[styles.tiktok,  { flexDirection: 'row'}]}>
          <Image style={styles.imgTt} source={Tiktok} />
          <Text style={styles.tt}>Entrar no TikTok</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.social, { flexDirection: 'row'}]}>
          <Image style={styles.imgG} source={Gmail} />
          <Text style={styles.textSocial}>Fazer login com o google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.social, { flexDirection: 'row'}]}>
          <Image style={styles.imgE} source={Email} />
          <Text style={styles.textSocial}>Entrar com e-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.social, { flexDirection: 'row'}]}>
          <Image style={styles.imgSocial} source={Facebook} />
          <Text style={styles.textSocial}>Faça login com o Facebook</Text>
        </TouchableOpacity>

        <View style={styles.texto}>
          <Text style={styles.termos}>
            Li e concordo com os{" "}
            <Text
              style={styles.termo}
              onPress={() => Linking.openURL("https://example.com/termos")}
            >
              Termos de Serviço
            </Text>{" "}
            e a{" "}
            <Text
              style={styles.termo}
              onPress={() => Linking.openURL("https://example.com/politica")}
            >
              Política de Privacidade
            </Text>{" "}
            do CapCut
          </Text>
        </View>
      </View>
    </View>
  );
};
