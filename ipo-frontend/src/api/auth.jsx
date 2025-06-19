import axios from "axios";

const API_URL = "https://ipo-web-application.onrender.com/auth";

export const registerUser = async (username, password) => {
    return axios.post(`${API_URL}/signupnow/`, { username, password });
};

export const loginUser = async (username, password) => {
    return axios.post(`${API_URL}/signin/`, { username, password });
};
