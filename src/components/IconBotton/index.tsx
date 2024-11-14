// IconButton.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface IconButtonProps {
  source: ImageSourcePropType;
  desc: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleIcon?: StyleProp<ImageStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ source, desc, styleContainer, styleIcon, styleText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styleContainer}>
        <Image style={styleIcon} source={source} />
      </View>
      <Text style={styleText}>{desc}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
