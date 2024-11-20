import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function UbicacionScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>UBÍCANOS</Text>

        <Image
          source={require('@/assets/gps.png')} 
          style={styles.image}
        />

        <Text style={styles.subtitle}>Piura</Text>

        <Text style={styles.address}>
          Urb- Enace 4ta Etapa Mz. b3 Lote 17 {'\n'} (Calle Maria Arguedas)
        </Text>

        <Text style={styles.subtitle}>GPS</Text>

        {/* Espacio para la imagen gigante */}
        <Image
          source={require('@/assets/ubi.png')} // Cambia esto por la imagen que desees usar
          style={styles.largeImage}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#555555',
  },
  address: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  largeImage: {
    width: '100%',
    height: 500,
    marginTop: 20,
    borderRadius: 10,
  },
});
