import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import catHeader from '../../assets/imgs/cat_header.png';
import { Button } from 'react-native-paper';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const { navigate } = useNavigation();

  function handleNavigateToSignIn() {
    navigate('SignIn');
  }

  function handleNavigateToSignUp() {
    navigate('SignUp');
  }

  return (
    <>
      {fontsLoaded ? (
        <View style={styles.container}>
          <Image style={styles.headerImage} source={catHeader} />
          <Text style={styles.text}>
            Encontre o <Text style={styles.textSpan}>par perfeito</Text> para o seu gatinho
          </Text>
          <View style={styles.buttonBox}>
            <Button
              onPress={handleNavigateToSignIn}
              color="#000000"
              style={styles.button}
              mode="outlined"
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </Button>
            <Button
              onPress={handleNavigateToSignUp}
              style={styles.button}
              color="#DF4D60"
              mode="contained"
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Button>
          </View>
        </View>
      ) : null}
    </>
  );
}
