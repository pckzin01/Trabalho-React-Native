// Header.tsx
import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { styles } from "./style";

interface HeaderProps {
  leftIcon: ImageSourcePropType;
  helpText: string;
  entrar?: string;
}

const HeaderLogin: React.FC<HeaderProps> = ({ leftIcon, helpText, entrar }) => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Image style={styles.img} source={leftIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.ajuda}>{helpText}</Text>
    </TouchableOpacity>
      <Text style={styles.entrar}>{entrar}</Text>
  </View>
);

export default HeaderLogin;
