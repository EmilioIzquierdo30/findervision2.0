import React, { useState } from "react";

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        // Enviar mensaje a la API (Python)
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
        const botMessage = { sender: "bot", text: data.response };

        setMessages([...messages, userMessage, botMessage]);
        setInput("");
    };

    return (
        <div>
            <div style={{ border: "1px solid black", padding: "10px", height: "400px", overflowY: "scroll" }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
                        <strong>{msg.sender === "user" ? "Tú" : "Bot"}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Escribe tu mensaje"
            />
            <button onClick={sendMessage}>Enviar</button>
        </div>
    );
}

export default App;
