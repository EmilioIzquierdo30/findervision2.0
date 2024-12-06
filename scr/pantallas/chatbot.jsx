import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const ChatBotScreen = () => {
  const [messages, setMessages] = useState([]);

  // Inicializar mensajes al cargar
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hola, soy tu Asesor de Plantas. ¿En qué puedo ayudarte hoy?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "ChatBot",
          avatar: "https://via.placeholder.com/150",
        },
      },
    ]);
  }, []);

  // Manejar los mensajes enviados por el usuario
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    // Simular respuesta del chatbot
    setTimeout(() => {
      handleBotResponse(messages[0].text);
    }, 1000);
  }, []);

  // Responder a mensajes del usuario
  const handleBotResponse = (userMessage) => {
    let botMessage = "Lo siento, no entendí eso.";

    // Respuestas simples basadas en el mensaje del usuario
    if (userMessage.toLowerCase().includes("plantas")) {
      botMessage = "Puedo ayudarte a identificar plantas o responder dudas.";
    } else if (userMessage.toLowerCase().includes("premium")) {
      botMessage =
        "Para activar Premium, dirígete a la sección de Configuraciones.";
    } else if (userMessage.toLowerCase().includes("hola")) {
      botMessage = "¡Hola! ¿Cómo puedo ayudarte hoy?";
    }

    const botResponse = {
      _id: Math.random().toString(), // Generar ID único
      text: botMessage,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "ChatBot",
        avatar: "https://via.placeholder.com/150",
      },
    };

    setMessages((previousMessages) => GiftedChat.append(previousMessages, botResponse));
  };

  // Personalizar burbujas del chat
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

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1, // ID del usuario
        }}
        renderBubble={renderBubble} // Personalización de burbujas
        placeholder="Escribe un mensaje..."
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
