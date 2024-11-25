const express = require("express");
const bodyParser = require("body-parser");
const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuración de Dialogflow
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: "ruta/a/tu/archivo-dialogflow.json", // Ruta al archivo JSON descargado
});

const projectId = "tu-id-del-proyecto"; // Coloca el ID del proyecto de Dialogflow

// Endpoint para enviar mensajes al chatbot
app.post("/chatbot", async (req, res) => {
  const { userMessage } = req.body;

  // Generar un ID de sesión único
  const sessionId = uuid.v4();
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userMessage,
        languageCode: "es", // Idioma configurado en Dialogflow
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    const botMessage = result.fulfillmentText || "Lo siento, no entendí eso.";
    res.json({ botMessage });
  } catch (error) {
    console.error("Error conectando con Dialogflow:", error);
    res.status(500).send("Error al procesar la solicitud.");
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
