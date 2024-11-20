import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, View, Modal, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import React, { useState, useEffect } from 'react';

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [pdfSource, setPdfSource] = useState('');

  // Función para obtener la fecha y hora actuales
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const time = now.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${date} ${time}`;
  };

  // Actualizar la fecha y hora cada vez que se abre el modal
  useEffect(() => {
    if (modalVisible) {
      setCurrentDateTime(getCurrentDateTime());
    }
  }, [modalVisible]);

  const handleImagePress = (title: React.SetStateAction<string>, pdfFile: React.SetStateAction<string>) => {
    setSelectedTitle(title);
    setPdfSource(pdfFile);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado con texto sobre la imagen */}
      <View style={styles.headerOverlay}>
        <Image 
          source={require('@/assets/gestiondeseguridad.png')}
          style={styles.fullWidthImage}
          resizeMode="cover"
        />
        <Text style={styles.headerTitle}>Gestión de Seguridad</Text>
      </View>

      {/* Collage de imágenes en 2x3 */}
      <View style={styles.imageGrid}>
        {/* Fila 1 */}
        <View style={styles.imageRow}>
          <TouchableOpacity 
            onPress={() => handleImagePress('Comité SST', 'planosst.pdf')} 
            style={styles.imageWrapper}
          >
            <Image
              source={require('@/assets/2.png')}
              style={styles.gridImage}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Comité SST</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handleImagePress('Reglamento Interno SST', 'reglamento.pdf')} 
            style={styles.imageWrapper}
          >
            <Image
              source={require('@/assets/2.png')}
              style={styles.gridImage}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Reglamento Interno SST</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 2 */}
        <View style={styles.imageRow}>
          <TouchableOpacity 
            onPress={() => handleImagePress('Plano de evacuación', 'planoevacuacion.pdf')} 
            style={styles.imageWrapper}
          >
            <Image
              source={require('@/assets/1.png')}
              style={styles.gridImage}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Plano de evacuación</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handleImagePress('Plan de SST', 'plansst.pdf')} 
            style={styles.imageWrapper}
          >
            <Image
              source={require('@/assets/2.png')}
              style={styles.gridImage}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Plan de SST</Text>
          </TouchableOpacity>
        </View>

        {/* Fila 3 */}
        <View style={styles.imageRow}>
          <TouchableOpacity 
            onPress={() => handleImagePress('Plan de contingencia', 'plandecot.pdf')} 
            style={styles.imageWrapper}
          >
            <Image
              source={require('@/assets/2.png')}
              style={styles.gridImage}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Plan de contingencia</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handleImagePress('Ley Nº 29783', 'ley29783.pdf')} 
            style={styles.imageWrapper}
          >
            <Image
              source={require('@/assets/2.png')}
              style={styles.gridImage}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Ley Nº 29783</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ventana emergente (Modal) */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.evacuationPlanText}>{selectedTitle}:</Text>
            {/* Imagen PDF y texto alineados */}
            <View style={styles.pdfContainer}>
              <Image 
                source={require('@/assets/pdf.png')}
                style={styles.pdfIcon}
                resizeMode="contain"
              />
              <Text style={styles.pdfText}>{pdfSource}</Text>
              {/* Añadimos salto de línea entre texto y la fecha */}
              <Text style={styles.dateText}>
                {currentDateTime}
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* StatusBar */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  headerOverlay: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  fullWidthImage: {
    width: '100%', // La imagen se extiende de extremo a extremo
    height: '100%', // Se ajusta al tamaño de headerOverlay
    position: 'absolute', // Permite superponer el texto sobre la imagen
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: '#000', // Sombreado blanco
    textShadowOffset: { width: 2, height: 2 }, // Posición del sombreado
    textShadowRadius: 3, // Difuminado del sombreado
  },
  imageGrid: {
    flexDirection: 'column', // Columnas de imágenes
    width: '90%', // Ajusta el ancho del contenedor
  },
  imageRow: {
    flexDirection: 'row', // Distribuir imágenes en fila
    justifyContent: 'space-between', // Espacio igual entre imágenes
    marginBottom: 20, // Separación entre filas
  },
  imageWrapper: {
    alignItems: 'center',
    width: '48%', // 48% de ancho para que las imágenes ocupen espacio igual
  },
  gridImage: {
    width: '100%', // Imágenes llenan el 100% del espacio disponible en la columna
    height: 120,
    borderRadius: 10,
  },
  imageLabel: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  evacuationPlanText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  pdfContainer: {
    flexDirection: 'row', // Coloca el PDF y la fecha en columnas
    alignItems: 'center',
    marginTop: 10,
  },
  pdfIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  pdfText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
