from chatterbot.logic import LogicAdapter

class PlantasLogicAdapter(LogicAdapter):
    def can_process(self, statement):
        return "planta" in statement.text.lower()

    def process(self, statement, additional_response_selection_parameters=None):
        if "manzanilla" in statement.text.lower():
            response = "La manzanilla es buena para problemas estomacales."
        elif "menta" in statement.text.lower():
            response = "La menta ayuda a aliviar dolores de cabeza."
        else:
            response = "No tengo información sobre esa planta."
        return response
