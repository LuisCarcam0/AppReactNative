import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function ContactoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CONTÁCTANOS</Text>

      <Image
        source={require('@/assets/contacto.png')} // Aquí puedes reemplazar la URL con la imagen que desees
        style={styles.image}
      />

      <Text style={styles.subtitle}>Atención al Cliente</Text>

      <View style={styles.contactContainer}>
        <TextInput
          style={styles.contactInput}
          value="+51 961 476 491"
          editable={false}
        />
        <TextInput
          style={styles.contactInput}
          value="+51 928 525 795"
          editable={false}
        />
      </View>

      <Text style={styles.socialSubtitle}>SIGUENOS EN NUESTRAS REDES SOCIALES</Text>

      <View style={styles.socialItem}>
        <Image
          source={require('@/assets/wpp.png')}
          style={styles.socialIcon}
        />
        <View>
          <Text style={styles.socialTitle}>WhatsApp</Text>
          <Text style={styles.socialText}>+51 977 120 388</Text>
        </View>
      </View>

      <View style={styles.socialItem}>
        <Image
          source={require('@/assets/instagram.png')}
          style={styles.socialIcon}
        />
        <View>
          <Text style={styles.socialTitle}>Instagram</Text>
          <Text style={styles.socialText}>Protect Construcción</Text>
        </View>
      </View>

      <View style={styles.socialItem}>
        <Image
          source={require('@/assets/fb.png')}
          style={styles.socialIcon}
        />
        <View>
          <Text style={styles.socialTitle}>Facebook</Text>
          <Text style={styles.socialText}>Protect Construcción</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff', // Fondo blanco por defecto
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333', // Color oscuro para mejor visibilidad
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
    color: '#555555', // Color gris oscuro
  },
  contactContainer: {
    width: '100%',
    marginBottom: 20,
  },
  contactInput: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333', // Color del texto
  },
  socialSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#555555',
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  socialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  socialText: {
    fontSize: 14,
    color: '#666666',
  },
});
