import streamlit as st
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# API для вычислений
@app.route('/api/calculate', methods=['POST'])
def calculate():
    data = request.json
    a = data.get("a", 1)
    b = data.get("b", 1)
    c = data.get("c", 1)

    if a <= 0 or b <= 0 or c <= 0:
        return jsonify({"error": "Параметры должны быть положительными!"}), 400

    result = (a + b) * c / (a + 1)
    return jsonify({"result": result})

# Streamlit Welcome Page
def streamlit_app():
    st.title("Добро пожаловать!")
    st.write("Выберите режим:")
    
    if st.button("Перейти к расчетам"):
        st.experimental_set_query_params(page="calculator")

    params = st.experimental_get_query_params()
    if params.get("page") == ["calculator"]:
        st.title("Симулятор сепараторов")
        st.write("Введите параметры и запустите расчёт.")

        a = st.number_input("Введите A", min_value=1.0, value=10.0)
        b = st.number_input("Введите B", min_value=1.0, value=20.0)
        c = st.number_input("Введите C", min_value=1.0, value=30.0)

        if st.button("Рассчитать"):
            result = (a + b) * c / (a + 1)
            st.success(f"Результат: {result}")

if __name__ == '__main__':
    from threading import Thread
    Thread(target=lambda: app.run(host="0.0.0.0", port=5000)).start()
    streamlit_app()
