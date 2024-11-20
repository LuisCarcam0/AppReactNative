import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function PrivacidadScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Políticas de Privacidad</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.message}>
        Esta sección está en mantenimiento. 
        {'\n'}Por favor, regresa pronto.
        {'\n'}Estamos trabajando... [████████░░░░░░░░░░░] 40%
      </Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#ddd',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
  },
});

