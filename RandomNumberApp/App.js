import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Impede que a tela de splash seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    // Simula algum carregamento inicial, como carregamento de recursos
    const loadApp = async () => {
      // Simula um atraso de 2 segundos antes de esconder a splash screen
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsReady(true);

      // Esconde a tela de splash depois que o app está pronto
      SplashScreen.hideAsync();
    };

    loadApp();
  }, []);

  const generateRandomNumber = () => {
    const random = Math.floor(10000 + Math.random() * 90000); // Gera um número de 5 dígitos
    setRandomNumber(random);
  };

  if (!isReady) {
    // A tela de splash continua sendo exibida até que o app esteja pronto
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gerador de Número Aleatório</Text>
      <Button title="Gerar Número" onPress={generateRandomNumber} />
      {randomNumber !== null && (
        <Text style={styles.randomNumber}>O Número Gerado é: {randomNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  randomNumber: {
    marginTop: 20,
    fontSize: 30,
    
    color: '#333',
  },
});
