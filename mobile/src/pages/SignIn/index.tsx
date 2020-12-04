import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from './styles';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <TextInput
        theme={{
          colors: { primary: '#DF4D60' },
        }}
        mode="outlined"
        style={styles.textInput}
        label="Email"
        value={'Olá'}
      />
      <TextInput
        theme={{
          colors: { primary: '#DF4D60' },
        }}
        mode="outlined"
        style={styles.textInput}
        label="Senha"
        value={'Senha'}
      />

      <Button style={styles.button} color="#DF4D60" mode="contained">
        <Text style={styles.buttonText}>Entrar</Text>
      </Button>
    </View>
  );
}
