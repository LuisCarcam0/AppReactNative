import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert, TouchableOpacity, View, Image } from 'react-native';
import { Text } from '@/components/Themed';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Credenciales Correctas', 'Bienvenido ' + 'Gerson Antonio Paucar Neyra');
    } else {
      Alert.alert('Error', 'Por favor ingresa tu usuario y contraseña');
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagen de bienvenida */}
      <Image source={require('@/assets/login.png')} style={styles.logo} />

      <Text style={styles.welcomeTitle}>Bienvenido a Protect Construcción</Text>

      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="ProtectConstruccion@ucvvirtual.edu.pe"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {username && password ? (
        <Link href="/modal" asChild>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </Link>
      ) : (
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>

      <View style={styles.flexGrow} />

      <View style={styles.bottomButtons}>
        <Link href="/contacto" asChild>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Contáctanos</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ubicacion" asChild>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Ubícanos</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/privacidad" asChild>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Privacidad</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100, // Ajusta el tamaño según sea necesario
    height: 100, // Ajusta el tamaño según sea necesario
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    color: '#007AFF',
    marginTop: 10,
  },
  flexGrow: {
    flex: 1,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
  },
  bottomButton: {
    alignItems: 'center',
    padding: 10,
  },
  bottomButtonText: {
    color: '#007AFF',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
