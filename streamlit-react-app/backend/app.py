import streamlit as st
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Разрешаем CORS для работы с React

@app.route('/api/data')
def get_data():
    return jsonify({
        "message": "Привет от Streamlit!",
        "status": "success",
        "data": {
            "number": 42,
            "info": "Streamlit успешно подключён к React!"
        }
    })

def streamlit_app():
    st.title("Streamlit Backend API")
    st.write("Этот сервер работает с React-приложением.")
    st.json({
        "API": "http://127.0.0.1:5000/api/data",
        "message": "Streamlit успешно подключён к React!"
    })

if __name__ == '__main__':
    from threading import Thread
    Thread(target=lambda: app.run(host="0.0.0.0", port=5000)).start()
    streamlit_app()
