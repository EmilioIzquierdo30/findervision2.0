import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Voice from '@react-native-voice/voice';
import Tts from 'react-native-tts';

export default function VoiceChat() {
    const [text, setText] = useState("");
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
            setText(event.value[0]);
        }
    };

    const speak = (message) => {
        Tts.speak(message);
    };

    const sendToChatbot = async () => {
        const response = await fetch('http://localhost:3000/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userMessage: text }),
        });

        const data = await response.json();
        const botMessage = data.botMessage;

        alert(`Respuesta del chatbot: ${botMessage}`);
        speak(botMessage); // Convierte la respuesta a voz
    };

    return (
        <View style={{ padding: 20 }}>
            <Button title={isListening ? "Detener" : "Hablar"} onPress={isListening ? stopListening : startListening} />
            <Text style={{ marginVertical: 20 }}>Texto: {text}</Text>
            <Button title="Enviar al chatbot" onPress={sendToChatbot} />
        </View>
    );
}
