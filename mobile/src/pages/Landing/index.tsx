import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import catHeader from '../../assets/imgs/cat_header.png';
import { Button } from 'react-native-paper';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Landing() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (
    <>
      {fontsLoaded ? (
        <View style={styles.container}>
          <Image style={styles.headerImage} source={catHeader} />
          <Text style={styles.text}>Encontre a alma felina do seu gato</Text>
          <View style={styles.buttonBox}>
            <Button color="#000000" style={styles.button} mode="outlined">
              <Text style={styles.buttonText}>Entrar</Text>
            </Button>
            <Button style={styles.button} color="#DF4D60" mode="contained">
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Button>
          </View>
        </View>
      ) : null}
    </>
  );
}
