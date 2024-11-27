import React, { useState } from 'react';
// Importa React y el hook useState para manejar el estado en el componente.

import { View, Button, Text } from 'react-native';
// Importa componentes de React Native para construir la interfaz de usuario.

import Voice from '@react-native-voice/voice';
// Importa la biblioteca Voice para manejar el reconocimiento de voz.

import speak from './TextToSpeech';
// Importa una función personalizada para convertir texto a voz (TTS).

export default function VoiceChat() {
    // Define el componente principal VoiceChat.

    const [text, setText] = useState("");
    // Estado para almacenar el texto reconocido del usuario.

    const [isListening, setIsListening] = useState(false);
    // Estado para manejar si el reconocimiento de voz está activo.

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
            // Si se reconoce texto...
            setText(event.value[0]);
            // Actualiza el estado con el texto reconocido.
        }
    };

    const sendToChatbot = async () => {
        // Envía el texto reconocido al chatbot.
        const response = await fetch('http://localhost:3000/chatbot', {
            // Realiza una solicitud al servidor en la ruta "/chatbot".
            method: 'POST',
            // Método HTTP POST.
            headers: { 'Content-Type': 'application/json' },
            // Especifica que el cuerpo de la solicitud es JSON.
            body: JSON.stringify({ userMessage: text }),
            // Convierte el texto del usuario a formato JSON.
        });

        const data = await response.json();
        // Convierte la respuesta del servidor a formato JSON.
        const botMessage = data.botMessage;
        // Extrae el mensaje del bot de la respuesta.

        alert(`Respuesta del chatbot: ${botMessage}`);
        // Muestra la respuesta del chatbot en una alerta.

        speak(botMessage);
        // Convierte la respuesta del chatbot a voz utilizando TTS.
    };

    return (
        // Renderiza la interfaz del usuario.
        <View style={{ padding: 20 }}>
            {/* Contenedor principal con margen interno de 20. */}

            <Button
                title={isListening ? "Detener" : "Hablar"}
                // Cambia el texto del botón según el estado de escucha.
                onPress={isListening ? stopListening : startListening}
                // Alterna entre iniciar y detener el reconocimiento de voz.
            />

            <Text style={{ marginVertical: 20 }}>
                {/* Texto reconocido del usuario. */}
                Texto: {text}
            </Text>

            <Button
                title="Enviar al chatbot"
                // Texto del botón para enviar al chatbot.
                onPress={sendToChatbot}
                // Llama a la función para enviar el texto al chatbot.
            />
        </View>
    );
}
