const express = require("express"); 
// Importa el framework Express para manejar el servidor HTTP.

const bodyParser = require("body-parser"); 
// Importa Body-Parser para procesar datos JSON enviados en las solicitudes.

const dialogflow = require("@google-cloud/dialogflow"); 
// Importa la biblioteca oficial de Dialogflow para conectarse al servicio de procesamiento de lenguaje natural.

const uuid = require("uuid"); 
// Importa la biblioteca para generar identificadores únicos (UUID).

const app = express(); 
// Crea una instancia de la aplicación Express.

const port = 3000; 
// Define el puerto en el que el servidor escuchará las solicitudes.

app.use(bodyParser.json()); 
// Configura la aplicación para que procese automáticamente los datos JSON de las solicitudes entrantes.

// Configuración de Dialogflow
const sessionClient = new dialogflow.SessionsClient({ 
  // Crea un cliente de sesión para conectarse con Dialogflow.
  keyFilename: "ruta/a/tu/archivo-dialogflow.json", 
  // Ruta al archivo JSON que contiene las credenciales del proyecto de Dialogflow.
});

const projectId = "tu-id-del-proyecto"; 
// Define el ID del proyecto de Dialogflow. Este debe coincidir con el configurado en Google Cloud.

// Endpoint para enviar mensajes al chatbot
app.post("/chatbot", async (req, res) => { 
  // Define un endpoint POST en la ruta "/chatbot" para recibir mensajes del usuario.

  const { userMessage } = req.body; 
  // Extrae el mensaje del usuario del cuerpo de la solicitud.

  // Generar un ID de sesión único
  const sessionId = uuid.v4(); 
  // Genera un identificador único para la sesión del usuario.

  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId); 
  // Crea una ruta de sesión específica para el proyecto y el ID de sesión.

  const request = { 
    // Construye la solicitud que se enviará a Dialogflow.
    session: sessionPath, 
    // Define la ruta de la sesión.
    queryInput: { 
      text: { 
        text: userMessage, 
        // Incluye el mensaje del usuario como entrada de texto.
        languageCode: "es", 
        // Configura el idioma en español.
      },
    },
  };

  try { 
    // Intenta procesar el mensaje del usuario.
    const responses = await sessionClient.detectIntent(request); 
    // Envía la solicitud a Dialogflow para que procese la intención del usuario.

    const result = responses[0].queryResult; 
    // Extrae el resultado de la primera respuesta recibida.

    const botMessage = result.fulfillmentText || "Lo siento, no entendí eso."; 
    // Obtiene la respuesta generada por Dialogflow o un mensaje predeterminado si no hay respuesta.

    res.json({ botMessage }); 
    // Envía la respuesta del chatbot al cliente en formato JSON.
  } catch (error) { 
    // Captura y maneja errores en caso de fallos al conectar con Dialogflow.
    console.error("Error conectando con Dialogflow:", error); 
    // Muestra el error en la consola.

    res.status(500).send("Error al procesar la solicitud."); 
    // Envía un mensaje de error al cliente con el código de estado 500.
  }
});

app.listen(port, () => { 
  // Inicia el servidor y comienza a escuchar solicitudes en el puerto especificado.
  console.log(`Servidor corriendo en http://localhost:${port}`); 
  // Imprime un mensaje en la consola indicando que el servidor está activo.
});
