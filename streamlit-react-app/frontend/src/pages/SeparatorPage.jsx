import  { useEffect } from "react";

const SeparatorPage = () => {
  useEffect(() => {
    window.location.href = "http://localhost:8501"; // Перенаправление в Streamlit
  }, []);

  return <h2 style={{ textAlign: "center", marginTop: "20vh", color: "white" }}>Загрузка расчётного модуля...</h2>;
};

export default SeparatorPage;
