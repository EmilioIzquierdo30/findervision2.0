from flask import Flask, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# Crear el chatbot
chatbot = ChatBot("BotPlantas")

# Entrenar el chatbot con datos en español
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("chatterbot.corpus.spanish")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    response = chatbot.get_response(user_message)
    return jsonify({"response": str(response)})

if __name__ == "__main__":
    app.run(debug=True)
