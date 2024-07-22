import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ButtonCustomProps {
  title: string;
  bgColor: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  title = 'Login',
  bgColor = 'white',
}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, {backgroundColor: bgColor}]}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonCustom;
