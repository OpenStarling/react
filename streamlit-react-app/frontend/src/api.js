const API_BASE_URL = "https://project-py-oea3.onrender.com/"; // Замените на ваш Streamlit URL

export const getDataFromStreamlit = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка запроса:", error);
    return { message: "Ошибка сервера", status: "error" };
  }
};
