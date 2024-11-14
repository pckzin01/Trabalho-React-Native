import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./style";

interface PropsInput {
  placeHolder: string;
  typeInput?: boolean;
}

export const TextInputField = ({ placeHolder, typeInput }: PropsInput) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.caixa, isFocused && styles.focusedContainer]}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="rgba(0,0,0,0.3)"
        secureTextEntry={typeInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};
