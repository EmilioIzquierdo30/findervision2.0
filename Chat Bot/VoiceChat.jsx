import React, { useState } from 'react';
// Importa React y el hook useState para manejar el estado del componente.

import { View, Button, Text } from 'react-native';
// Importa componentes básicos de React Native para la interfaz de usuario.

import Voice from '@react-native-voice/voice';
// Importa la biblioteca Voice para manejar el reconocimiento de voz.

import Tts from 'react-native-tts';
// Importa la biblioteca TTS (Text-to-Speech) para convertir texto a voz.

export default function VoiceChat() {
    // Define el componente principal de la aplicación.

    const [text, setText] = useState("");
    // Estado para almacenar el texto reconocido del usuario.

    const [isListening, setIsListening] = useState(false);
    // Estado para indicar si el reconocimiento de voz está activo.

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
        // Cambia el estado para indicar que dejó de escuchar.
        Voice.stop();
        // Detiene el reconocimiento de voz.
    };

    Voice.onSpeechResults = (event) => {
        // Maneja los resultados del reconocimiento de voz.
        if (event.value) {
            // Si el reconocimiento produce texto...
            setText(event.value[0]);
            // Actualiza el estado con el texto reconocido.
        }
    };

    const speak = (message) => {
        // Convierte un mensaje de texto a voz.
        Tts.speak(message);
        // Llama a la función de TTS para leer el mensaje en voz alta.
    };

    const sendToChatbot = async () => {
        // Envía el texto reconocido al servidor del chatbot.
        const response = await fetch('http://localhost:3000/chatbot', {
            // Realiza una solicitud HTTP al servidor local en la ruta "/chatbot".
            method: 'POST',
            // Define el método HTTP como POST.
            headers: { 'Content-Type': 'application/json' },
            // Especifica que el cuerpo de la solicitud es JSON.
            body: JSON.stringify({ userMessage: text }),
            // Convierte el texto del usuario a formato JSON y lo incluye en la solicitud.
        });

        const data = await response.json();
        // Convierte la respuesta del servidor a formato JSON.
        const botMessage = data.botMessage;
        // Extrae el mensaje del bot de la respuesta.

        alert(`Respuesta del chatbot: ${botMessage}`);
        // Muestra la respuesta del chatbot en una alerta emergente.

        speak(botMessage);
        // Convierte el mensaje del chatbot a voz y lo reproduce.
    };

    return (
        // Renderiza la interfaz de usuario.
        <View style={{ padding: 20 }}>
            {/* Contenedor principal con margen interno de 20. */}

            <Button
                title={isListening ? "Detener" : "Hablar"}
                // Cambia el texto del botón según el estado de escucha.
                onPress={isListening ? stopListening : startListening}
                // Alterna entre iniciar y detener el reconocimiento de voz.
            />

            <Text style={{ marginVertical: 20 }}>
                {/* Muestra el texto reconocido por el reconocimiento de voz. */}
                Texto: {text}
            </Text>

            <Button
                title="Enviar al chatbot"
                // Texto del botón para enviar el mensaje al chatbot.
                onPress={sendToChatbot}
                // Llama a la función que envía el texto al chatbot.
            />
        </View>
    );
}
