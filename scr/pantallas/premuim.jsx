import React from "react";
import { View, Text, StyleSheet, Pressable, Modal, FlatList } from "react-native";

export default function PremiumPopup({ isVisible, onClose }) {
  const pricingOptions = [
    { id: 1, plan: "Mensual", price: "$5.99/mes", benefits: "Acceso completo durante un mes" },
    { id: 2, plan: "Anual", price: "$59.99/año", benefits: "Ahorra un 20% con el plan anual" },
    { id: 3, plan: "De por vida", price: "$199.99", benefits: "Acceso ilimitado para siempre" },
  ];

  const renderOption = ({ item }) => (
    <View style={styles.optionContainer}>
      <Text style={styles.planTitle}>{item.plan}</Text>
      <Text style={styles.planPrice}>{item.price}</Text>
      <Text style={styles.planBenefits}>{item.benefits}</Text>
      <Pressable style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Seleccionar</Text>
      </Pressable>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>¡Bienvenido a Premium!</Text>
          <Text style={styles.description}>
            Disfruta de beneficios exclusivos con nuestra membresía Premium.
          </Text>

          {/* Opciones de precios */}
          <FlatList
            data={pricingOptions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderOption}
            contentContainerStyle={styles.pricingList}
          />

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  pricingList: {
    width: "100%",
  },
  optionContainer: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  planPrice: {
    fontSize: 16,
    color: "#4CAF50",
    marginVertical: 5,
  },
  planBenefits: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  selectButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#E74C3C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
