import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from './styles';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <TextInput
        theme={{
          colors: { primary: '#DF4D60' },
        }}
        mode="outlined"
        style={styles.textInput}
        label="Nome"
        value={'Olá'}
      />
      <TextInput
        theme={{
          colors: { primary: '#DF4D60' },
        }}
        mode="outlined"
        style={styles.textInput}
        label="Email"
        value={'Senha'}
      />

      <TextInput
        theme={{
          colors: { primary: '#DF4D60' },
        }}
        mode="outlined"
        style={styles.textInput}
        label="Idade"
        value={'Senha'}
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
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Button>
    </View>
  );
}
