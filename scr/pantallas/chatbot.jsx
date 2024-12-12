import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat, Bubble, InputToolbar, Send } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";

const ChatBotScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hola, soy tu Asesor de Plantas. Estas son las cosas que puedo hacer:\n\n1. Identificar plantas\n2. Consejos de cuidado\n3. Prevención de riesgos\n4. Activar Premium\n\nEscribe el número de la opción que deseas explorar.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "ChatBot",
          avatar: "https://via.placeholder.com/150",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    setTimeout(() => {
      handleBotResponse(messages[0].text);
    }, 1000);
  }, []);

  const handleBotResponse = (userMessage) => {
    let botMessage = "Lo siento, no entendí eso. Por favor, selecciona un número válido.";
    const userOption = parseInt(userMessage);

    switch (userOption) {
      case 1:
        botMessage = "Para identificar una planta, sube una foto en la sección de identificación.";
        break;
      case 2:
        botMessage =
          "Dime el nombre de la planta y te daré consejos sobre su cuidado (riego, luz, fertilización, etc.).";
        break;
      case 3:
        botMessage =
          "Puedo ayudarte a identificar plantas medicinales.";
        break;
      case 4:
        botMessage =
          "Con Premium, tendrás acceso a diagnósticos avanzados y recomendaciones personalizadas. Dirígete al inicio para activarlo.";
        break;
      default:
        botMessage =
          "No entiendo esa opción. Por favor, elige un número entre 1 y 4.";
        break;
    }

    const botResponse = {
      _id: Math.random().toString(),
      text: botMessage,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "ChatBot",
        avatar: "https://via.placeholder.com/150",
      },
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, botResponse)
    );
  };

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: "#f0f0f0",
        },
        right: {
          backgroundColor: "#4CAF50",
        },
      }}
      textStyle={{
        left: {
          color: "#333",
        },
        right: {
          color: "#fff",
        },
      }}
    />
  );

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
      }}
    />
  );

  const renderSend = (props) => (
    <Send {...props} containerStyle={{ justifyContent: "center", alignItems: "center", marginRight: 10 }}>
      <Ionicons name="send-outline" size={28} color="#4CAF50" />
    </Send>
  );

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
        placeholder="Escribe tu mensaje o un número..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },
});

export default ChatBotScreen;
