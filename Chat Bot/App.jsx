import React, { useState } from "react";
import { View, TextInput, Button, Text, FlatList, StyleSheet } from "react-native";
import Voice from "@react-native-voice/voice";
import speak from "./TextoToSpeech";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    Voice.start("es-ES");
  };

  const stopListening = () => {
    setIsListening(false);
    Voice.stop();
  };

  Voice.onSpeechResults = (event) => {
    if (event.value) {
      const speechText = event.value[0];
      handleMessage(speechText);
    }
  };

  const handleMessage = async (userMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: `Tú: ${userMessage}`, isBot: false },
    ]);

    try {
      const response = await fetch("http://localhost:3000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage }),
      });

      const data = await response.json();
      const botMessage = data.botMessage;

      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: `Chatbot: ${botMessage}`, isBot: true },
      ]);

      speak(botMessage);
    } catch (error) {
      console.error("Error conectando con el chatbot:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={item.isBot ? styles.botMessage : styles.userMessage}>{item.text}</Text>
        )}
        style={styles.chatArea}
      />

      <TextInput
        style={styles.input}
        placeholder="Escribe un mensaje..."
        value={textInput}
        onChangeText={setTextInput}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Enviar"
          onPress={() => {
            handleMessage(textInput);
            setTextInput("");
          }}
        />
        <Button
          title={isListening ? "Detener Voz" : "Hablar"}
          onPress={isListening ? stopListening : startListening}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  chatArea: {
    flex: 1,
    marginBottom: 10,
  },
  botMessage: {
    backgroundColor: "#d1f5d3",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: "#d3e3f5",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
