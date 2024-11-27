import React, { useState } from "react"; 
// Importa React y el hook useState para manejar el estado dentro del componente.

import { View, TextInput, Button, Text, FlatList, StyleSheet } from "react-native"; 
// Importa componentes básicos de React Native para construir la interfaz de usuario.

import Voice from "@react-native-voice/voice"; 
// Importa la biblioteca para el reconocimiento de voz.

import speak from "./TextoToSpeech"; 
// Importa una función personalizada para convertir texto a voz.

export default function App() { 
  // Define el componente principal de la aplicación.

  const [messages, setMessages] = useState([]); 
  // Estado para almacenar los mensajes del chat.

  const [textInput, setTextInput] = useState(""); 
  // Estado para manejar el texto ingresado en el campo de texto.

  const [isListening, setIsListening] = useState(false); 
  // Estado para determinar si el reconocimiento de voz está activo.

  const startListening = () => { 
    // Inicia el reconocimiento de voz.
    setIsListening(true); 
    // Cambia el estado para indicar que se está escuchando.
    Voice.start("es-ES"); 
    // Comienza a escuchar con el idioma configurado en español.
  };

  const stopListening = () => { 
    // Detiene el reconocimiento de voz.
    setIsListening(false); 
    // Cambia el estado para indicar que se dejó de escuchar.
    Voice.stop(); 
    // Detiene el proceso de reconocimiento de voz.
  };

  Voice.onSpeechResults = (event) => { 
    // Maneja los resultados del reconocimiento de voz.
    if (event.value) { 
      // Si hay texto reconocido...
      const speechText = event.value[0]; 
      // Toma el primer resultado del reconocimiento.
      handleMessage(speechText); 
      // Llama a la función para manejar el mensaje procesado.
    }
  };

  const handleMessage = async (userMessage) => { 
    // Maneja los mensajes ingresados por el usuario.
    setMessages((prevMessages) => [
      ...prevMessages, 
      // Mantiene los mensajes existentes.
      { id: Date.now().toString(), text: `Tú: ${userMessage}`, isBot: false }, 
      // Agrega un nuevo mensaje de usuario.
    ]);

    try {
      const response = await fetch("http://localhost:3000/chatbot", { 
        // Realiza una petición a un servidor local para obtener la respuesta del chatbot.
        method: "POST", 
        // Define el método HTTP como POST.
        headers: { "Content-Type": "application/json" }, 
        // Especifica que se envía un cuerpo en formato JSON.
        body: JSON.stringify({ userMessage }), 
        // Convierte el mensaje del usuario a JSON para enviarlo.
      });

      const data = await response.json(); 
      // Convierte la respuesta del servidor a JSON.
      const botMessage = data.botMessage; 
      // Extrae el mensaje del chatbot.

      setMessages((prevMessages) => [
        ...prevMessages, 
        // Mantiene los mensajes existentes.
        { id: Date.now().toString(), text: `Chatbot: ${botMessage}`, isBot: true }, 
        // Agrega un nuevo mensaje del chatbot.
      ]);

      speak(botMessage); 
      // Reproduce el mensaje del chatbot en voz.
    } catch (error) { 
      // Captura errores en caso de que la conexión falle.
      console.error("Error conectando con el chatbot:", error); 
      // Muestra el error en la consola.
    }
  };

  return ( 
    // Renderiza la interfaz de usuario.
    <View style={styles.container}> 
      // Contenedor principal.

      <FlatList
        data={messages} 
        // Lista de mensajes.
        keyExtractor={(item) => item.id} 
        // Establece una clave única para cada elemento.
        renderItem={({ item }) => (
          <Text style={item.isBot ? styles.botMessage : styles.userMessage}>
            {item.text}
          </Text>
        )} 
        // Renderiza cada mensaje con un estilo diferente según sea del usuario o del bot.
        style={styles.chatArea} 
        // Aplica estilos al área del chat.
      />

      <TextInput
        style={styles.input} 
        // Estilo del campo de entrada de texto.
        placeholder="Escribe un mensaje..." 
        // Texto predeterminado cuando el campo está vacío.
        value={textInput} 
        // Vincula el estado con el contenido del campo de texto.
        onChangeText={setTextInput} 
        // Actualiza el estado cuando el texto cambia.
      />

      <View style={styles.buttonContainer}> 
      // Contenedor para los botones.

        <Button
          title="Enviar" 
          // Texto del botón.
          onPress={() => { 
            // Maneja el evento cuando se presiona el botón.
            handleMessage(textInput); 
            // Envía el mensaje ingresado.
            setTextInput(""); 
            // Limpia el campo de texto.
          }}
        />
        <Button
          title={isListening ? "Detener Voz" : "Hablar"} 
          // Cambia el texto del botón según el estado de escucha.
          onPress={isListening ? stopListening : startListening} 
          // Alterna entre iniciar y detener el reconocimiento de voz.
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  // Define los estilos para los componentes.
  container: {
    flex: 1, 
    // Usa todo el espacio disponible.
    padding: 10, 
    // Agrega espacio alrededor del contenido.
    backgroundColor: "#f5f5f5", 
    // Fondo claro.
  },
  chatArea: {
    flex: 1, 
    // Área principal de la lista de mensajes.
    marginBottom: 10, 
    // Espacio inferior.
  },
  botMessage: {
    backgroundColor: "#d1f5d3", 
    // Fondo verde claro para mensajes del bot.
    padding: 10, 
    // Relleno interno.
    marginVertical: 5, 
    // Espaciado vertical.
    borderRadius: 10, 
    // Bordes redondeados.
    alignSelf: "flex-start", 
    // Alinea los mensajes del bot a la izquierda.
  },
  userMessage: {
    backgroundColor: "#d3e3f5", 
    // Fondo azul claro para mensajes del usuario.
    padding: 10, 
    marginVertical: 5, 
    borderRadius: 10, 
    alignSelf: "flex-end", 
    // Alinea los mensajes del usuario a la derecha.
  },
  input: {
    borderWidth: 1, 
    // Borde alrededor del campo.
    borderColor: "#ccc", 
    // Color gris del borde.
    borderRadius: 5, 
    // Bordes redondeados.
    padding: 10, 
    // Relleno interno.
    marginBottom: 10, 
    // Espacio inferior.
    backgroundColor: "#fff", 
    // Fondo blanco.
  },
  buttonContainer: {
    flexDirection: "row", 
    // Coloca los botones en una fila.
    justifyContent: "space-between", 
    // Espacio entre los botones.
  },
});
