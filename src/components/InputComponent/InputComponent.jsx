import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./Input.styles";

const InputComponent = (props) => {
  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value);
  }

  const handlePress = () => {
    props.onSearch(text);
    props.handlerSubmit(); 
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleChangeText}
        value={text}
        style={styles.input}
        placeholder="Yapılacaklar..."
        placeholderTextColor='grey'
      />
      <View style={styles.button_container}>
        <Button
          title="Kaydet"
          color='white'
          onPress={handlePress}
        />
      </View>

    </View>
  )
}
export default InputComponent;
