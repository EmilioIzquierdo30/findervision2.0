import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AyudaScreen = () => {
  // Lista de preguntas frecuentes
  const faqs = [
    {
      question: "¿Cómo puedo identificar una planta?",
      answer:
        "Para identificar una planta, usa la funcionalidad 'Identificar' desde la pantalla principal y toma una foto o selecciona una imagen.",
    },
    {
      question: "¿Cómo reclamo mi prueba Premium?",
      answer:
        "En la pantalla principal, haz clic en la notificación de prueba Premium y sigue las instrucciones para activarla.",
    },
    {
      question: "¿Qué hacer si no puedo acceder a mi cuenta?",
      answer:
        "Por favor, verifica tu conexión a internet o restablece tu contraseña desde la pantalla de inicio de sesión.",
    },
  ];

  // Abrir un enlace para contacto
  const handleContact = () => {
    const email = "cucusneitor@hotmail.com";
    const subject = "Soporte Técnico - App de Plantas";
    const body = "Hola, necesito ayuda con...";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailto).catch(() =>
      Alert.alert("Error", "No se pudo abrir el cliente de correo.")
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ayuda y Soporte</Text>

      {/* Sección de Preguntas Frecuentes */}
      <Text style={styles.subtitle}>Preguntas Frecuentes</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.faqQuestion}>{faq.question}</Text>
          <Text style={styles.faqAnswer}>{faq.answer}</Text>
        </View>
      ))}

      {/* Botón de Contacto */}
      <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
        <Ionicons name="mail-outline" size={20} color="#fff" />
        <Text style={styles.contactButtonText}>Contactar Soporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 15,
  },
  faqContainer: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AyudaScreen;
